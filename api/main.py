from flask import Flask, render_template

app = Flask(__name__)

@app.post('/')
def index():
    return {'name':'Theodor'}

if __name__ == "__main__":
    app.run(debug=True, port=8000)

