'use strict';

var openHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopOne = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesForEachHourArray: [],
  totalDailySales: 0
};

//new code
shopOne.generateHourlyCustomer = function () {
  for(var i = 0; i < openHours.length; i++) {
    var custPerHour = Math.floor(Math.random() * (shopOne.maxCustPerHour - shopOne.minCustPerHour + 1)) + shopOne.minCustPerHour;
    shopOne.custEachHourArray.push(custPerHour);
  }
};
shopOne.generateCookiesForEachHour = function () {
  shopOne.generateHourlyCustomer();
  for(var i = 0; i < openHours.length; i++) {
    var cookiesForEachHour = Math.floor(shopOne.custEachHourArray[i] * shopOne.avgCookiesPerCust);
    shopOne.cookiesForEachHourArray.push(cookiesForEachHour);
    shopOne.totalDailySales += cookiesForEachHour;
  }
};
//render to HTML
shopOne.render = function () {
  shopOne.generateCookiesForEachHour();
  for(var i = 0; i < openHours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = shopOne.cookiesForEachHourArray[i];
    var sales = document.getElementById('sales');
    sales.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + shopOne.totalDailySales;
  sales.appendChild(totalListItem);
};
shopOne.render();

////////////////////////////////////////////////////////////////////////////////
//these are the basic default properties of this object
var shopTwo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHourArray: [],
  cookiesForEachHourArray: [],
  totalDailySales: 0
};

shopTwo.generateHourlyCustomer = function () {
  for(var i = 0; i < openHours.length; i++) {
    var custPerHour = Math.floor(Math.random() * (shopTwo.maxCustPerHour - shopTwo.minCustPerHour + 1)) + shopTwo.minCustPerHour;
    shopTwo.custEachHourArray.push(custPerHour);
  }
};

shopTwo.generateCookiesForEachHour = function () {
  shopTwo.generateHourlyCustomer();
  for(var i = 0; i < openHours.length; i++) {
    var cookiesForEachHour = Math.floor(shopTwo.custEachHourArray[i] * shopTwo.avgCookiesPerCust);
    shopTwo.cookiesForEachHourArray.push(cookiesForEachHour);
    shopTwo.totalDailySales += cookiesForEachHour;
  }
};

//render to HTML
shopTwo.render = function () {
  shopTwo.generateCookiesForEachHour();
  for(var i = 0; i < openHours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = shopTwo.cookiesForEachHourArray[i];
    var sales2 = document.getElementById('sales2');
    sales2.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + shopTwo.totalDailySales;
  sales2.appendChild(totalListItem);
};
shopTwo.render();

///////////////////////////////////////////////////////////////////////////////
var shopThree = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesForEachHourArray: [],
  totalDailySales: 0
};

shopThree.generateHourlyCustomer = function () {
  for(var i = 0; i < openHours.length; i++) {
    var custPerHour = Math.floor(Math.random() * (shopThree.maxCustPerHour - shopThree.minCustPerHour + 1)) + shopThree.minCustPerHour;
    shopThree.custEachHourArray.push(custPerHour);
  }
};

shopThree.generateCookiesForEachHour = function () {
  shopThree.generateHourlyCustomer();
  for(var i = 0; i < openHours.length; i++) {
    var cookiesForEachHour = Math.floor(shopThree.custEachHourArray[i] * shopThree.avgCookiesPerCust);
    shopThree.cookiesForEachHourArray.push(cookiesForEachHour);
    shopThree.totalDailySales += cookiesForEachHour;
  }
};

//render to HTML
shopThree.render = function () {
  shopThree.generateCookiesForEachHour();
  for(var i = 0; i < openHours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = shopThree.cookiesForEachHourArray[i];
    var sales3 = document.getElementById('sales3');
    sales3.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + shopThree.totalDailySales;
  sales3.appendChild(totalListItem);
};
shopThree.render();
///////////////////////////////////////////////////////////////////////////////
var shopFour = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHourArray: [],
  cookiesForEachHourArray: [],
  totalDailySales: 0
};


shopFour.generateHourlyCustomer = function () {
  for(var i = 0; i < openHours.length; i++) {
    var custPerHour = Math.floor(Math.random() * (shopFour.maxCustPerHour - shopFour.minCustPerHour + 1)) + shopFour.minCustPerHour;
    shopFour.custEachHourArray.push(custPerHour);
  }
};

shopFour.generateCookiesForEachHour = function () {
  shopFour.generateHourlyCustomer();
  for(var i = 0; i < openHours.length; i++) {
    var cookiesForEachHour = Math.floor(shopFour.custEachHourArray[i] * shopFour.avgCookiesPerCust);
    shopFour.cookiesForEachHourArray.push(cookiesForEachHour);
    shopFour.totalDailySales += cookiesForEachHour;
  }
};

//render to HTML
shopFour.render = function () {
  shopFour.generateCookiesForEachHour();
  for(var i = 0; i < openHours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = shopFour.cookiesForEachHourArray[i];
    var sales4 = document.getElementById('sales4');
    sales4.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + shopFour.totalDailySales;
  sales4.appendChild(totalListItem);
};
shopFour.render();
///////////////////////////////////////////////////////////////////////////////
var shopFive = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHourArray: [],
  cookiesForEachHourArray: [],
  totalDailySales: 0
};

shopFive.generateHourlyCustomer = function () {
  for(var i = 0; i < openHours.length; i++) {
    var custPerHour = Math.floor(Math.random() * (shopFive.maxCustPerHour - shopFive.minCustPerHour + 1)) + shopFive.minCustPerHour;
    shopFive.custEachHourArray.push(custPerHour);
  }
};

shopFive.generateCookiesForEachHour = function () {
  shopFive.generateHourlyCustomer();
  for(var i = 0; i < openHours.length; i++) {
    var cookiesForEachHour = Math.floor(shopFive.custEachHourArray[i] * shopFive.avgCookiesPerCust);
    shopFive.cookiesForEachHourArray.push(cookiesForEachHour);
    shopFive.totalDailySales += cookiesForEachHour;
  }
};

//render to HTML
shopFive.render = function () {
  shopFive.generateCookiesForEachHour();
  for(var i = 0; i < openHours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = shopFive.cookiesForEachHourArray[i];
    var sales5 = document.getElementById('sales5');
    sales5.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + shopFive.totalDailySales;
  sales5.appendChild(totalListItem);
};
shopFive.render();
///////////////////////////////////////////////////////////////////////////////

//build out the guts, break it down into pieces, build in loogical order
/*firstAndPike.calcCustEachHour = function () {};
  firstAndPike.calcCookiesEachHour = function () {};
  firstAndPike.render = function () {} ; //to render the info the DOM*/
//then start adding the logic to each piece

//you know that you're going to need a for loop to handle the behaviors of the guts
//within those for loops, you need to first off calc the rand numb and store in var custPerHour
//within that var custPerHour you have to calc rand number
//you can just use the guts of computational piece of the random numb function found online
//replace the max and min parameters with the properties declared earlier that rep the max and min
//so far we have...

/*firstAndPike.calcCustEachHour = function () {
  for(var i =0; i < hours.length; i++) {
    var custPerHour = Math.floor(Math.random()) * (firstAndPike.maxCustPerHour - firstAndPike.minCustPerHour + 1)) +
    firstAndPike.minCustPerHour;
    firstAndPike.custEachHourArray.push(custEachHourArray);
  }
};
*/

//use console to call firstAndPike.calcCustEachHour() to see that it works
//call the first method inside of the firstAndPike.calcCookiesEachHour function
//it will look like...
/*firstAndPike.calcCookiesEachHour = function () {
  firstAndPike.calcCustEachHour();
  for(var i =0; i < hours.length; i ++) {
    var cookiesForEachHour = firstAndPike.custEachHourArray[i] * firstAndPike.avgCookies;
    firstAndPike.cookiesForEachHourArray.push(cookiesForEachHour);
  }
};
*/

//the render piece
/*firstAndPike.render = fuction () {
  firstAndPike.calcCookiesEachHour();
  for(var i = 0; i < hours.length; i++) [
  var listItem = document.createElement('li');
  listItem.textContent = firstAndPike.cookiesForEachHourArray[i];
  document.getElementById = ('pike');
  var pikeList = document.getElementById('pike');
  pikeList.appendChild(listItem);
]
}*/
