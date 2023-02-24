from flask import Flask, render_template
from flask_cors import CORS
import yahoo_scraper



app = Flask(__name__)
CORS(app)

@app.route('/<companykey>/', methods=['GET'])
async def index(companykey):
    print(companykey)
    json_info = await yahoo_scraper.scrapeFinanceData(companykey)
    return json_info



if __name__ == "__main__":
    app.run(debug=True, port=8000)

