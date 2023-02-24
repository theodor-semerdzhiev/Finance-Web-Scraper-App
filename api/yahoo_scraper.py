import requests
from bs4 import BeautifulSoup
import asyncio

# companykey will be a string (AAPL is an example)
async def scrapeFinanceData(companykey):

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
    try:
        for tr in trS[0].find_all("tr"):
            returndict[tr.td.text]=(tr.contents[1].text)

        for tr in trS[1].find_all("tr"):
            returndict[tr.td.text]=(tr.contents[1].text)
    # if something goes wrong, return None
    except:
        return None
    return returndict

    