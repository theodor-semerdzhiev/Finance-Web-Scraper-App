import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"

response=None
try:
    response = requests.get(url)
except:
    print('cannot do GET request at ', url)

soup = BeautifulSoup(response.text, features="html.parser")
table=soup.find('table').find_all('a', class_='external text')
i=1
try:
  file = open('wikipedia.txt', 'w')
except Exception as e:
  print(e, '\n -----printing to standard output instead-----')
  for company in table:
    print(f'#{i}: ' +company.text+'\n')
    i+=1
  exit
  

for company in table:
    try:
      file.write(f'#{i}: ' +company.text+'\n')
      i+=1
    except Exception as e:
      print(e)

#parses table into cvs file
table_cvs=soup.find('table').tbody.find_all('tr')
cvs = open('wikipedia.cvs', 'w')

for row in table_cvs:
  for i in range(len(row.contents)):
    if row.contents[i] == '\n':
        continue
    if i == len(row.contents)-1:
       cvs.write(row.contents[i].text.replace('\n',''))
       break
    cvs.write(row.contents[i].text.replace('\n','')+',')
  cvs.write('\n')
exit(0)
     

      


