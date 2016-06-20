'use strict'

var shopOne = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  hourlyCustomers: [],
  hourlyCookies: []
};

function randomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var openHours = ['6 am','7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

//generates number of hourlyCustomers
for(var i = 0; i < openHours.length; i++) {
  var customers = (randomNumb(shopOne.min, shopOne.max));
  console.log(customers);
  shopOne.hourlyCustomers.push(customers);
}

//multiply avgCookie by each randomNumb
for(var i = 0; i < openHours.length; i++) {
  var cookies = shopOne.avgCookie * shopOne.hourlyCustomers[i];
  console.log(cookies);
}
