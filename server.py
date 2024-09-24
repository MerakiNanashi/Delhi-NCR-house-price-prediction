from flask import Flask, request, jsonify
import util
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict_home_price", methods=['GET', 'POST'])
def predict_home_price():
        area = int(request.form['area']) 
        Bedrooms = int(request.form['Bedrooms'])
        Bathrooms = int(request.form['Bathrooms']) 
        Balcony = int(request.form['Balcony'])
        parking = int(request.form['parking'])
        Lift = int(request.form['Lift'])
        
        response = jsonify({
            'estimated_price': util.get_estimated_price(area, Bedrooms, Bathrooms, Balcony, parking, Lift)
        })

        response.headers.add('Access Control-Allow-Origin', '*')

        return response

if __name__ == "__main__":
    print("Server Starting")
    util.load_saved_artifacts()
    app.run(port=5000)