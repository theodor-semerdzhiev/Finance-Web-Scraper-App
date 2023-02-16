import requests
import re


url="https://finance.yahoo.com/quote/AAPL?p=AAPL"

r = requests.get(url)

prop= "Previous Close"
print(r)
print(r.status_code == 200)
t=r.text

ind = t.index('Previous Close')

redText = t[ind:].split('</span>')[1]
val= re.split(r'[<,>]',redText)[4]

print(val)




