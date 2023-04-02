/*
============================================
; Title: dupuis-temp-conversion.js
; Author: Jocelyn Dupuis
; Date: 03/31/2023
; Description: JavaScript file for Temperature Conversion App
============================================
*/


// Function to create two variables
function calcCelsius() {
  // Creates fahrenheit variable to capture fahrenheit value from the users input field on HTML page
  const fahrenheit = document.getElementById('fahrenheit').value

  // Applies the conversion formula to the celsius variable
  const celsius = (fahrenheit - 32) / 1.8

  // Assigns the results from the calcCelsius function to the innerHTML of the form-results
  document.getElementById('form-results').innerHTML = celsius.toFixed(2)
}


