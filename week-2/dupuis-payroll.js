/*
====================================
; Title: dupuis-payroll.js
; Author: Jocelyn Dupuis
; Date: 3/25/23
; Description: JavaScript page for payroll exercise 2.2
====================================
**/

// Assigned variables for employees first names
const firstNameBeethoven = "Ludwig"
const firstNameBach = "Johann"
const firstNameMozart = "Wolfgang"

// Assigned variables for employees last names
const lastNameBeethoven = "Beethoven"
const lastNameBach = "Bach"
const lastNameMozart = "Mozart"

// Assigned variables for employees addresses
const addressBeethoven = "505 main street"
const addressBach = "512 main street"
const addressMozart = "600 main street"

//Assigned variables for dates
const dateBeethoven = new Date().toLocaleDateString('en-US');
const dateBach = new Date().toLocaleDateString('en-US');
const dateMozart = new Date().toLocaleDateString('en-US');

//Assigned variables for employees pay rates
const payRateBeethoven = 18.9.toFixed(1)
const payRateBach = 25.5.toFixed(1)
const payRateMozart = 50.1.toFixed(1)

//These are the inner HTML elements for card/employee 1 Beethoven
document.getElementById("firstName-beethoven").innerHTML = firstNameBeethoven;
document.getElementById("lastName-beethoven").innerHTML = lastNameBeethoven;
document.getElementById("address-beethoven").innerHTML = addressBeethoven;
document.getElementById("date-beethoven").innerHTML = dateBeethoven;
document.getElementById("payRate-beethoven").innerHTML = payRateBeethoven;

//These are the inner HTML elements for card/employee 2 Bach
document.getElementById("firstName-bach").innerHTML = firstNameBach;
document.getElementById("lastName-bach").innerHTML = lastNameBach;
document.getElementById("address-bach").innerHTML = addressBach;
document.getElementById("date-bach").innerHTML = dateBach;
document.getElementById("payRate-bach").innerHTML = payRateBach;

//These are the inner HTML elements for card/employee 3 Mozart
document.getElementById("firstName-mozart").innerHTML = firstNameMozart;
document.getElementById("lastName-mozart").innerHTML = lastNameMozart;
document.getElementById("address-mozart").innerHTML = addressMozart;
document.getElementById("date-mozart").innerHTML = dateMozart;
document.getElementById("payRate-mozart").innerHTML = payRateMozart;
