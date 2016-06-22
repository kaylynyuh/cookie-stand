'use strict';

var openHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Shops(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesForEachHourArray = [];
  this.totalDailySales = 0;
};

var shopOne = new Shops('1st and Pike', 23, 65, 6.3);
var shopTwo = new Shops('Seatac Airport', 3, 24, 1.2);
var shopThree = new Shops('Seattle Center', 11, 38, 3.7);
var shopFour = new Shops('Capitol Hill', 20, 38, 2.3);
var shopFive = new Shops('Alki', 2, 16, 4.6);

Shops.prototype.generateHourlyCustomer = function () {
  for(var i = 0; i < openHours.length; i++) {
    var custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    console.log(custPerHour);
    console.log(this.minCustPerHour);
    this.custEachHourArray.push(custPerHour);
  };
};
Shops.prototype.generateCookiesForEachHour = function () {
  this.generateHourlyCustomer();
  for(var i = 0; i < openHours.length; i++) {
    var cookiesForEachHour = Math.floor(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesForEachHourArray.push(cookiesForEachHour);
    this.totalDailySales += cookiesForEachHour;
  }
};

shopOne.generateCookiesForEachHour();
shopTwo.generateCookiesForEachHour();
shopThree.generateCookiesForEachHour();
shopFour.generateCookiesForEachHour();
shopFive.generateCookiesForEachHour();
//end constructor function

//this accesses the table in the HTML
var cookiesTable = document.getElementById('cookies');

//this function handles the header content of the table
function renderHeader () {
  var trEl = document.createElement('tr');

  var headerTitles = ['', 'Daily Location Total'];
  for(var i = 0; i < headerTitles.length; i++) {
    //'for each pass, this code will run'
    var thEl = document.createElement('th');//create
    thEl.textContent = headerTitles[i];//add content
    trEl.appendChild(thEl);//append this table header element into a row
  }
  for(var i = 0; i < openHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  }
  cookiesTable.appendChild(trEl);
};
renderHeader();

//this function handles the table data of the row
function renderTableData (stores) {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');//create
  tdEl.textContent = stores.locationName;//add content
  trEl.appendChild(tdEl);//append

  var tdEl = document.createElement('td');
  tdEl.textContent = stores.totalDailySales;
  trEl.appendChild(tdEl);

  for(var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = stores.cookiesForEachHourArray[i];
    trEl.appendChild(tdEl);
  }
  cookiesTable.appendChild(trEl);
};
renderTableData(shopOne);
renderTableData(shopTwo);
renderTableData(shopThree);
renderTableData(shopFour);
renderTableData(shopFive);
