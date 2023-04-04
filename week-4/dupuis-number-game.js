/*
============================================
; Title: dupuis-number-game.js
; Author: Jocelyn Dupuis
; Date: 04/03/2023
; Description: JavaScript file for Numbers Game App
============================================
*/

// Assign variable rnd to random number generated
const rnd = generateRndNum()

// Function to generate random number for numbers game
function generateRndNum() {
  return Math.floor((Math.random() * 10) + 1)
}

// Function to check guess based of assigned variables to return specific string
function chkGuess() {
  const msgLessThan = "The number is less than " + document.getElementById('userNumber').value
  const msgGreaterThan = "The number is greater than " + document.getElementById('userNumber').value
  const msgCongrats = "Congratulations! You picked the correct number! " + document.getElementById('userNumber').value
  const guess = document.getElementById('userNumber').value

  // Using and if, else if, and else expressions to compare the users guess against the random generated number to display message
  if (guess > rnd) {
    document.getElementById("form-results").innerHTML = msgLessThan
  } else if (guess < rnd) {
    document.getElementById("form-results").innerHTML = msgGreaterThan
  } else {
    document.getElementById("form-results").innerHTML = msgCongrats
  }
}






