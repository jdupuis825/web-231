/*
============================================
; Title: dupuis-sequence-game.js
; Author: Jocelyn Dupuis
; Date: 04/11/2023
; Description: JavaScript file for Sequence Game App
============================================
*/

// Function to register the onclick event for Display Sequence button in HTML page
// Variable created for users choice of sequence
function displaySequence() {
  const choice = document.getElementById("number-sequence").value;

  // Switch block created with case statements for sequences: numbers, even, and odd
  switch (choice) {
    // Variables created and initialized
    // While loop to create 10 iterations to display 0-10 sequence with commas
    case "numbers":
      let txtNumSequence = "";
      let index = 0;
      while (index <= 10) {
        txtNumSequence += index + ", ";
        index++;
      }
      // Gets element from inner HTML
      document.getElementById("form-results").innerHTML = txtNumSequence.slice(0, -2);
      break;
    // Variables created and initialized
    // evenNumber keeps track of iterations and builds string and adding 2
    // Do while loop to create comma delimited string displaying even numbers between 0-20
    case "even":
      let txtEvenSequence = "";
      let evenNumber = 0;
      do {
        txtEvenSequence += evenNumber + ", ";
        evenNumber = evenNumber + 2;
      }
      while (evenNumber < 21);
      // Gets element from inner HTML
      document.getElementById("form-results").innerHTML = txtEvenSequence.slice(0, -2);
      break;
    // Variable created to initialize empty string
    // For loop to build comma delimited string displaying odd numbers between 0-20
    case "odd":
       let txtOddSequence = "";
       for (let i = 1; i < 20; i + 2) {
        txtOddSequence += i + ", ";
        i = i + 2;
       }
      document.getElementById("form-results").innerHTML = txtOddSequence.slice(0, -2);
      break;
    // Default for when user selects --select-- from menu to display an invalid selection alert box
    default:
      choice = alert("Invalid selection, please try again.");
  }
}

// Variable created for Display Sequence button in HTML
const numberButton = document.getElementById("sequence-button")

// Event listener for Display Sequence button
numberButton.addEventListener("click", displaySequence);

