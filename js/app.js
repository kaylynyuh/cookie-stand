'use strict';

var openHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// array for tracking shop hourly totals
var shopHourlyTotals = new Array(15); // makes an empty array of length 15
shopHourlyTotals.fill(0,0,15); // fills empty array with default values. value, starting index, 15

// variable for tracking shop daily totals
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
//creating instances of Shops constructor
var shopOne = new Shops('1st and Pike', 23, 65, 6.3);
var shopTwo = new Shops('Seatac Airport', 3, 24, 1.2);
var shopThree = new Shops('Seattle Center', 11, 38, 3.7);
var shopFour = new Shops('Capitol Hill', 20, 38, 2.3);
var shopFive = new Shops('Alki', 2, 16, 4.6);
//using prototypal inheritance
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
  shopDailyTotals += stores.totalDailySales;

  for(var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = stores.cookiesForEachHourArray[i];
    trEl.appendChild(tdEl);
    shopHourlyTotals[i] += stores.cookiesForEachHourArray[i];//why i needed array with default values
  }
  cookiesTable.appendChild(trEl);
};

function renderTotals() {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');//create
  tdEl.textContent = 'Totals';//add content
  trEl.appendChild(tdEl);//append

  var tdEl = document.createElement('td');
  tdEl.textContent = shopDailyTotals;
  trEl.appendChild(tdEl);

  for(var i = 0; i < shopHourlyTotals.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = shopHourlyTotals[i];
    trEl.appendChild(tdEl);
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
