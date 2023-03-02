import requests
from bs4 import BeautifulSoup
import re

"""
This function takes in a company key and create a bing query (because its more web scraper friendly)
in order to retrive recent articles and then parse that into a defacto JSON (dict)
"""
def getCurrentNews(companykey):
    url=f'https://www.bing.com/news/search?q={companykey}+news'
    response=None
    try:
        response= requests.get(url)
    except:
        return {'error':'Could not get Data'}
    
    html = response.text
    soup = BeautifulSoup(html, features='html.parser')
    results=dict()
    author=None
    for i,div in enumerate(soup.find_all('div',attrs={'class':'caption'})):
        foo=div.find_all("a")
        results[i]=dict()
        results[i]['author']=re.search(r'from\s+(.*)', foo[0].get('aria-label')).group(1)
        results[i]['title']=foo[1].text
        results[i]['time']=div.find("span", attrs={'tabindex':"0"}).get('aria-label')
        results[i]['snippet']=div.find('div',attrs={'class':'snippet'}).text
    
    return results
            

    
    
