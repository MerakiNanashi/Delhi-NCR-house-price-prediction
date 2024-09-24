import json
import pickle
import numpy as np

__data_columns = None
__model = None

def get_estimated_price(area, Bedrooms, Bathrooms, Balcony, parking, Lift):
    x = np.zeros(len(__data_columns))
    x[0]=area
    x[1]=Bedrooms
    x[2]=Bathrooms
    x[3]=Balcony
    x[4]=parking
    x[5]=Lift
    return round(__model.predict([x])[0],2)


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns

    with open("/server/artifacts/columns.json", 'r') as f:
        __data_columns = json.load(f)['data_columns']
    global __model
    with open("/server/artifacts/DelhiNCR_home_price_model", 'rb') as f:
        __model = pickle.load(f)
    print("loading saved artifacts...done")

if __name__ == "__main__":
    load_saved_artifacts()