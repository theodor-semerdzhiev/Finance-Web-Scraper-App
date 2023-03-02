import requests
from bs4 import BeautifulSoup

# companykey will be a string (AAPL is an example)
"""
This function takes a company key and runs some web scraping logic
to extract current financial info yahoo finance
"""
def scrapeFinanceData(companykey):

    url = f"https://finance.yahoo.com/quote/{companykey}?p={companykey}"
    response=None
    try:
        response = requests.get(url)
    except:
        return {'error':'Cannot get Data'}
    t = response.text
    soup = BeautifulSoup(t, features="html.parser")
    trS=soup.find_all("table")
    returndict= dict()
    for tr in trS[0].find_all("tr"):
        returndict[tr.td.text]=(tr.contents[1].text)

    for tr in trS[1].find_all("tr"):
        returndict[tr.td.text]=(tr.contents[1].text)

    return returndict


    