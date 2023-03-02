from flask import Flask, render_template
from flask_cors import CORS
from yahoo_scraper import scrapeFinanceData 
from news_scraper import getCurrentNews

"""
TODO:   Create Database Table Containing all the companies keys 
        on yahoo finance, in order to check if companyKey is valid
"""

app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET'])
async def index():
    return "Hello"


@app.route('/<companykey>/', methods=['GET'])
async def getStockInfo(companykey):
    print(companykey)
    json_info = scrapeFinanceData(companykey)
    
    return json_info

@app.route('/newsapi/<companykey>/', methods=['GET'])
async def getNews(companykey):
    print(companykey)
    json_info = getCurrentNews(companykey)
    return json_info

if __name__ == "__main__":
    app.run(debug=True, port=8000)

