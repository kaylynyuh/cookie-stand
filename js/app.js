'use strict';

var openHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopHourlyTotals = new Array(15); // makes an empty array of length 15
shopHourlyTotals.fill(0,0,15); // fills empty array with default values. value, starting index, 15

var shopDailyTotals = 0;

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

var cookiesTable = document.getElementById('cookies');
function renderHeader () {
  var trEl = document.createElement('tr');
  var headerTitles = ['', 'Daily Location Total'];
  for(var i = 0; i < headerTitles.length; i++) {
    buildElement('th', headerTitles[i], trEl);
  }
  for(var i = 0; i < openHours.length; i++) {
    buildElement('th', openHours[i], trEl);
  }
  cookiesTable.appendChild(trEl);
};
renderHeader();
//this function handles the table data of the row
function renderTableData (stores) {
  var trEl = document.createElement('tr');
  buildElement('td', stores.locationName, trEl);
  buildElement('td', stores.totalDailySales, trEl);
  shopDailyTotals += stores.totalDailySales;
  for(var i = 0; i < openHours.length; i++) {
    buildElement('td', stores.cookiesForEachHourArray[i], trEl);
    shopHourlyTotals[i] += stores.cookiesForEachHourArray[i];//why i needed array with default values
  }
  cookiesTable.appendChild(trEl);
};

function renderTotals() {
  var trEl = document.createElement('tr');
  buildElement('td', 'Totals', trEl);
  buildElement('td', shopDailyTotals, trEl);
  for(var i = 0; i < shopHourlyTotals.length; i++) {
    buildElement('td', shopHourlyTotals[i], trEl);
  }
  cookiesTable.appendChild(trEl);
}

renderTableData(shopOne);
renderTableData(shopTwo);
renderTableData(shopThree);
renderTableData(shopFour);
renderTableData(shopFive);
renderTotals();

var newStoreForm = document.getElementById('new-location');
newStoreForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if(!event.target.store.value && !event.target.newMin.value && !event.target.newMax.value && !event.target.newAvg.value) {
    return alert('Cannot be empty');
  }
  var newStoreName = event.target.store.value;
  var newMinimum = parseFloat(event.target.newMin.value);
  var newMaximum = parseFloat(event.target.newMax.value);
  var newAverage = parseFloat(event.target.newAvg.value);
  var newStore = new Shops(newStoreName, newMinimum, newMaximum, newAverage);
  event.target.store.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newAvg.value = null;
  newStore.generateCookiesForEachHour();
  renderTableData(newStore);
});

//global function to buil elements
function buildElement (kind, content, where){
  var x = document.createElement(kind);
  x.textContent = content;
  where.appendChild(x);
}
