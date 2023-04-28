/*
============================================
; Title: dupuis-calculator.js
; Author: Jocelyn Dupuis
; Date: 04/27/2023
; Description: JavaScript file for Calculator App
============================================
*/

// Function for multiplying numbers with two parameters to return sum
function multiply(num1, num2) {
  // Conditionals to check if parameters are numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // Error message thrown if not truthy
    throw Error("Error: inputs must be numbers");
  }

  // Conditionals added to check if each parameter value isNaN()
  if (isNaN(num1) || isNaN(num2)) {
    // Error message thrown if truthy
    throw Error("Error: inputs must be numbers");
  }

  // Return values for sum
  return num1 * num2;
}


// Function for dividing numbers with two parameters to return sum
function divide(num1, num2) {
  // Conditionals to check if parameters are numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // Error message thrown if not truthy
    throw Error("Error: inputs must be numbers");
  }

  // Conditionals added to check if each parameter value isNan()
  if (isNaN(num1) || isNaN(num2)) {
    // Error message thrown if truthy
    throw Error("Error: inputs must be numbers");
  }

  // Conditional added to check if users first number is 0
  if (num1 === 0) {
    // Error message thrown if truthy
    throw Error("Error: cannot divide by zero")
  }

  // Conditional added to check if users first number is 0
  if (num2 === 0) {
    // Error message thrown if truthy
    throw Error("Error: cannot divide by zero")
  }

  // Return values for sum
  return num1 / num2;
}


// Function to display multiplication results
function displayMultiplyResults() {
  // Variables created from the users input
  const userNum1 = document.getElementById("multiNum1").value;
  const userNum2 = document.getElementById("multiNum2").value;
  // Parse variables using JS built-in function
  const num1 = parseFloat(userNum1);
  const num2 = parseFloat(userNum2);

  // Try/catch statement to call multiply function
  try {
    // Variable created to assign results
    const sum = multiply(num1, num2);
    // Variable created to display inner results
    const sumTotal = document.getElementById("mul-results").innerHTML = num1 + ' * ' + num2 + ' = ' + sum;
    sumTotal.innerHTML = sum;
    // Error window alert for thrown error message
  } catch (error) {
    alert(error.message);
  }

}
// Variable created for the multiplication button
const multiplyButton = document.getElementById("multiply-button");
// Onclick event for multiplication button to display results
multiplyButton.onclick = displayMultiplyResults;


// Function for dividing numbers with two parameters to return sum
function displayDivideResults() {
  // Variables created from the users input
  const userNum1 = document.getElementById("divNum1").value;
  const userNum2 = document.getElementById("divNum2").value;
  // Parse variables using JS built-in function
  const num1 = parseFloat(userNum1);
  const num2 = parseFloat(userNum2);

  // Try/catch statement to call divide function
  try {
    // Variable created to assign results
    const sum = divide(num1, num2);
    // Variable created to display inner results
    const sumTotal = document.getElementById("div-results").innerHTML = num1 + ' / ' + num2 + ' = ' + sum;
    sumTotal.innerHTML = sum;
    // Error window alert for thrown error message
  } catch (error) {
    alert(error.message);
  }

}
// Variable created for the divide button
const divideButton = document.getElementById("divide-button");
// Onclick event for divide button to display results
divideButton.onclick = displayDivideResults;
