from flask import Flask, render_template
from flask_cors import CORS
import yahoo_scraper
import json


app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
async def index():
    json_info = await yahoo_scraper.scrapeFinanceData()
    return json_info



if __name__ == "__main__":
    app.run(debug=True, port=8000)

