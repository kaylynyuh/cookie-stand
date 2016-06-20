'use strict';

function randomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var openHours = ['6 am','7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var shopOne = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  hourlyCustomers: [],
  hourlyCookies: [],
  //generate number of hourlyCustomers
  generateHourlyCustomer: function () {
    for(var i = 0; i < openHours.length; i++) {
      var customers = (randomNumb(this.min, this.max));
      console.log(customers);
      this.hourlyCustomers.push(customers);
    }
  },

  //generate number of hourlyCookies
  generateHourlyCookies: function () {
    for(var i = 0; i < openHours.length; i++) {
      var cookies = this.avgCookie * this.hourlyCustomers[i];
      console.log(cookies);
      this.hourlyCookies.push(cookies);
    }
  }
};

shopOne.generateHourlyCustomer();
shopOne.generateHourlyCookies();
/*long way
for(var i = 0; i < openHours.length; i++) {
  var customers = (randomNumb(shopOne.min, shopOne.max));
  console.log(customers);
  shopOne.hourlyCustomers.push(customers);
}

for(var i = 0; i < openHours.length; i++) {
  var cookies = shopOne.avgCookie * shopOne.hourlyCustomers[i];
  console.log(cookies);
  shopOne.
}
*/
