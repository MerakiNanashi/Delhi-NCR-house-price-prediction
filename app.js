

function getBathroomsValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
function getBedroomsValue() {
    var uiBedrooms = document.getElementsByName("uiBedrooms");
    for(var i in uiBedrooms) {
      if(uiBedrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
function getBalconyValue() {
    var uiBalcony = document.getElementsByName("uiBalcony");
    for(var i in uiBalcony) {
      if(uiBalcony[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
function getparkingValue() {
    var uiparking = document.getElementsByName("uiparking");
    for(var i in uiparking) {
      if(uiparking[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
function getLiftValue() {
    var uiLift = document.getElementsByName("uiLift");
    for(var i in uiLift) {
      if(uiLift[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var area = document.getElementById("uiarea");
    var Bedrooms = getBedroomsValue();
    var Bathrooms = getBathroomsValue();
    var Balcony = getBalconyValue();
    var parking = getparkingValue();
    var Lift = getLiftValue();
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/predict_home_price"; 

    $.post(url, {
        area : parseFloat(area.value),
        Bedrooms: Bedrooms,
        Bathrooms: Bathrooms,
        Balcony: Balcony,
        parking: parking,
        Lift: Lift

    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        console.log(status);
    });
}

  
function onPageLoad() {
    console.log( "document loaded" );
  }
window.onload = onPageLoad;