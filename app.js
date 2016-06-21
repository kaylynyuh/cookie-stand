'use strict';

var openHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopOne = {
  min: 23,
  max: 65,
  avgCookie: 6.3,
  hourlyCustomers: [],
  hourlyCookies: [],
  total: 0
};

  //generate number of hourlyCustomers
shopOne.generateHourlyCustomer = function (min, max) {
  for(var i = 0; i < openHours.length; i++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(customers);
    this.hourlyCustomers.push(customers);
  }
};
shopOne.generateHourlyCustomer(shopOne.min, shopOne.max);

  //generate number of hourlyCookies
shopOne.generateHourlyCookies = function () {
  for(var i = 0; i < openHours.length; i++) {
    var cookies = Math.floor(this.avgCookie * this.hourlyCustomers[i]);
    console.log(cookies);
    this.hourlyCookies.push(cookies);
    shopOne.total += cookies;
  }
};
shopOne.generateHourlyCookies();

shopOne.listSales = function () {
  var sales = document.getElementById('sales');
  for(var i = 0; i < shopOne.hourlyCustomers.length; i++) {
    console.log(shopOne.hourlyCustomers[i]);
    var listItem = document.createElement('li');
    listItem.textContent = 'At ' + openHours[i] + ', ' + shopOne.hourlyCookies[i] + ' cookies were sold.';
    sales.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total : ' + shopOne.total;
  sales.appendChild(total);
};
shopOne.listSales();

////////////////////////////////////////////////////////////////////////////////
//these are the basic default properties of this object
var shopTwo = {
  min: 3,
  max: 24,
  avgCookie: 1.2,
  hourlyCustomers: [],
  hourlyCookies: [],
  total: 0
};

  //generate number of hourlyCustomers
shopTwo.generateHourlyCustomer = function (min, max) {
  for(var i = 0; i < openHours.length; i++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(customers);
    this.hourlyCustomers.push(customers);
  }
};
shopTwo.generateHourlyCustomer(shopTwo.min, shopTwo.max);

  //generate number of hourlyCookies
shopTwo.generateHourlyCookies = function () {
  for(var i = 0; i < openHours.length; i++) {
    var cookies = Math.floor(this.avgCookie * this.hourlyCustomers[i]);
    console.log(cookies);
    this.hourlyCookies.push(cookies);
    shopTwo.total += cookies;
  }
};
shopTwo.generateHourlyCookies();

shopTwo.listSales = function () {
  var sales2 = document.getElementById('sales2');
  for(var i = 0; i < shopTwo.hourlyCustomers.length; i++) {
    console.log(shopTwo.hourlyCustomers[i]);
    var listItem = document.createElement('li');
    listItem.textContent = 'At ' + openHours[i] + ', ' + shopTwo.hourlyCookies[i] + ' cookies were sold.';
    sales2.appendChild(listItem);
  }
  var total = document.createElement('ul');
  total.textContent = 'Total : ' + shopTwo.total;
  sales2.appendChild(total);
};
shopTwo.listSales();
///////////////////////////////////////////////////////////////////////////////
var shopThree = {
  min: 11,
  max: 38,
  avgCookie: 3.7,
  hourlyCustomers: [],
  hourlyCookies: [],
  total: 0
};

  //generate number of hourlyCustomers
shopThree.generateHourlyCustomer = function (min, max) {
  for(var i = 0; i < openHours.length; i++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(customers);
    this.hourlyCustomers.push(customers);
  }
};
shopThree.generateHourlyCustomer(shopThree.min, shopThree.max);

  //generate number of hourlyCookies
shopThree.generateHourlyCookies = function () {
  for(var i = 0; i < openHours.length; i++) {
    var cookies = Math.floor(this.avgCookie * this.hourlyCustomers[i]);
    console.log(cookies);
    this.hourlyCookies.push(cookies);
    shopThree.total += cookies;
  }
};
shopThree.generateHourlyCookies();

shopThree.listSales = function () {
  var sales3 = document.getElementById('sales3');
  for(var i = 0; i < shopThree.hourlyCustomers.length; i++) {
    console.log(shopThree.hourlyCustomers[i]);
    var listItem = document.createElement('li');
    listItem.textContent = 'At ' + openHours[i] + ', ' + shopThree.hourlyCookies[i] + ' cookies were sold.';
    sales3.appendChild(listItem);
  }
  var total = document.createElement('ul');
  total.textContent = 'Total : ' + shopThree.total;
  sales3.appendChild(total);
};
shopThree.listSales();
///////////////////////////////////////////////////////////////////////////////
var shopFour = {
  min: 20,
  max: 38,
  avgCookie: 2.3,
  hourlyCustomers: [],
  hourlyCookies: [],
  total: 0
};

  //generate number of hourlyCustomers
shopFour.generateHourlyCustomer = function (min, max) {
  for(var i = 0; i < openHours.length; i++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(customers);
    this.hourlyCustomers.push(customers);
  }
};
shopFour.generateHourlyCustomer(shopFour.min, shopFour.max);

  //generate number of hourlyCookies
shopFour.generateHourlyCookies = function () {
  for(var i = 0; i < openHours.length; i++) {
    var cookies = Math.floor(this.avgCookie * this.hourlyCustomers[i]);
    console.log(cookies);
    this.hourlyCookies.push(cookies);
    shopFour.total += cookies;
  }
};
shopFour.generateHourlyCookies();

shopFour.listSales = function () {
  var sales4 = document.getElementById('sales4');
  for(var i = 0; i < shopFour.hourlyCustomers.length; i++) {
    console.log(shopFour.hourlyCustomers[i]);
    var listItem = document.createElement('li');
    listItem.textContent = 'At ' + openHours[i] + ', ' + shopFour.hourlyCookies[i] + ' cookies were sold.';
    sales4.appendChild(listItem);
  }
  var total = document.createElement('ul');
  total.textContent = 'Total : ' + shopFour.total;
  sales4.appendChild(total);
};
shopFour.listSales();
///////////////////////////////////////////////////////////////////////////////
var shopFive = {
  min: 2,
  max: 16,
  avgCookie: 4.6,
  hourlyCustomers: [],
  hourlyCookies: [],
  total: 0
};

  //generate number of hourlyCustomers
shopFive.generateHourlyCustomer = function (min, max) {
  for(var i = 0; i < openHours.length; i++) {
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(customers);
    this.hourlyCustomers.push(customers);
  }
};
shopFive.generateHourlyCustomer(shopFive.min, shopFive.max);

  //generate number of hourlyCookies
shopFive.generateHourlyCookies = function () {
  for(var i = 0; i < openHours.length; i++) {
    var cookies = Math.floor(this.avgCookie * this.hourlyCustomers[i]);
    console.log(cookies);
    this.hourlyCookies.push(cookies);
    shopFive.total += cookies;
  }
};
shopFive.generateHourlyCookies();

shopFive.listSales = function () {
  var sales5 = document.getElementById('sales5');
  for(var i = 0; i < shopFive.hourlyCustomers.length; i++) {
    console.log(shopFive.hourlyCustomers[i]);
    var listItem = document.createElement('li');
    listItem.textContent = 'At ' + openHours[i] + ', ' + shopFive.hourlyCookies[i] + ' cookies were sold.';
    sales5.appendChild(listItem);
  }
  var total = document.createElement('ul');
  total.textContent = 'Total : ' + shopFive.total;
  sales5.appendChild(total);
};
shopFive.listSales();
///////////////////////////////////////////////////////////////////////////////
