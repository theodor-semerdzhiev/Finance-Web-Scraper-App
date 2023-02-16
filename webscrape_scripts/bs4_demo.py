import requests
from bs4 import BeautifulSoup

url = "https://finance.yahoo.com/quote/AAPL?p=AAPL"

response=None
try:
    response = requests.get(url)
except:
    print('cannot do GET request at ', url)

t = response.text

soup = BeautifulSoup(t, features="html.parser")

# trS=soup.find_all("td", class_="C($primaryColor) W(51%)")
trS=soup.find_all("table")
f = open('yahoodata.txt',"w")
try:
    for tr in trS[0].find_all("tr"):
        f.write(tr.td.text+' : '+tr.contents[1].text+'\n')

    for tr in trS[1].find_all("tr"):
        f.write(tr.td.text+' : '+ tr.contents[1].text+'\n')
except:
    print('something went wrong')

    