## Delhi-NCR House Price Prediction Model

A machine learning application that predicts house prices based on various features using scikit-learn, with a web interface built with Flask.

### Overview

This project implements a house price prediction model using machine learning techniques. It takes various house features as input (such as square footage, number of bedrooms, bathrooms, etc.) and predicts the market price. The model is deployed as a web application for easy access and usage.

### Features

- **AutoML Approach**: Automated model selection and hyperparameter tuning
- **Machine Learning Model**: Linear Regression with GridSearchCV optimization
- **Data Analysis**: Comprehensive EDA (Exploratory Data Analysis) using pandas and numpy
- **Visualization**: Graphical representation of data insights with matplotlib
- **Web Interface**: User-friendly front-end built with HTML, CSS, and JavaScript
- **API**: RESTful API endpoints using Flask for model predictions

### Tech Stack

- **Python**: Core programming language
- **scikit-learn**: Machine learning model implementation (Linear Regression with GridSearchCV)
- **pandas & numpy**: Data manipulation and analysis
- **Flask**: Web framework for API and application hosting
- **HTML/CSS/JavaScript**: Front-end interface
- **matplotlib**: Data visualization

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/MerakiNanashi/Delhi-NCR-house-price-prediction.git
   cd Delhi-NCR-house-price-prediction
   ```

2. Create and activate a virtual environment (recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install required packages:
   ```
   pip install -r requirements.txt
   ```

### Usage

## Running the Web Application

1. Start the Flask server:
   ```
   python server.py
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Using the API

Send a POST request to the prediction endpoint with house features:

```
POST /predict_home_price
Content-Type: application/json

{
  "area": 1500,
  "bedrooms": 3,
  "bathrooms": 2,
  "balcony": 1,
  "parking": 0,
  "lift": 1
}
```
Note: Make sure all the files are located in correct directories.

### Model Information

- **Algorithm**: Linear Regression optimized with GridSearchCV
- **AutoML Approach**: Automated hyperparameter tuning and model selection
- **Features**: Floor area, bedrooms, bathrooms, balcony, parking, lift
- **Accuracy**: Cross Validation score of 0.90855928
- **Training Data**: Trained on Delhi NCR housing data
- **Region Focus**: Delhi NCR real estate market

### Project Structure

```
house-price-prediction/
│
├── DelhiNCR_home_price_model    # Trained model (saved)
├── DelhiNCR_house_price.ipynb   # Jupyter notebook with model development and training
├── Delhi_v2.csv                 # Raw dataset with Delhi NCR housing data
├── README.md                    # Project documentation
├── app.css                      # CSS styles for the web interface
├── app.html                     # HTML template for the web interface
├── app.js                       # JavaScript for the web interface
├── columns.json                 # JSON file storing model feature information
├── requirements.txt             # Project dependencies
├── server.py                    # Flask server implementation
├── util.cpython-312.pyc         # Compiled Python utility module
└── util.py                      # Utility functions for prediction and data processing
```

### Development

## Training the Model

The model has been trained using the Jupyter notebook:

1. Open the notebook to see the full training process:
   ```
   jupyter notebook DelhiNCR_house_price.ipynb
   ```

2. The notebook contains:
   - Data loading and preprocessing
   - Exploratory data analysis
   - Feature engineering
   - Model training with GridSearchCV
   - Model evaluation
   - Model export

## Running Tests

To test the model's prediction capabilities:

1. Use the Flask API to make predictions
2. Check predictions against known prices in the dataset

### API Documentation

## Prediction Endpoint

**URL**: `/predict_home_price`
**Method**: `GET`, `POST`
**Content-Type**: `application/json`

**Request Body (for POST)**:
```json
{
  "area": 1500,
  "bedrooms": 3,
  "bathrooms": 2,
  "balcony": 1,
  "parking": 0,
  "lift": 1
}
```

**Response**:
```json
{
  "predicted_price": 8500000
}
```

**For GET requests**: The endpoint will return the prediction form HTML page where users can input values manually.

### Feature Description:

- **area**: Total floor area in square feet
- **bedrooms**: Number of bedrooms
- **bathrooms**: Number of bathrooms
- **balcony**:  Number of balconies (0, 1, 2, etc.)
- **parking**: Number of parkings (0, 1, 2, etc.)
- **lift**: Number of elevators (0, 1, 2, etc.)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data sourced from [Kaggle](https://www.kaggle.com/)
