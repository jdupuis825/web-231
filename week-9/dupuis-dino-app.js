/*
============================================
; Title: dupuis-dino-app.js
; Author: Jocelyn Dupuis
; Date: 05/11/2023
; Description: JavaScript file for Dino App
============================================
*/

// Created class for Gigantosaurus with constructor and string variable
class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  // Method created to return string of the variable with message
  roar() {
    return this.name + " says: rooooooar";
  }
}

// Child class created for Tyrannosaurus with constructor passing received string variable to parent Gigantosaurus
class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }
  // Method created to return concatenated string of variable with message
  growl() {
    return this.name + " says: groooooowl";
  }
}

// Created class for Velociraptor with constructor passing received string variable to child class Tyrannosaurus
class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }
  // Method created to return concatenated string of variable with message
  awk() {
    return this.name + " says: awk awk awwwwwwk";
  }
}

// Variables created for each class
const raptor = new Velociraptor("Velociraptor");
const giga = new Gigantosaurus("Gigantosaurus");
const rex = new Tyrannosaurus("Tyrannosaurus");

// Function created with switch statement decision tree for dino selection based on users choice
function display() {
// Variables created for selection and results
const dinoPick = document.querySelector('input[name="dinoPick"]:checked');
const dinoResult = document.getElementById("form-results");
let dinoMessage = "";
switch (dinoPick?.id) {
  case "gigantosaurus":
    dinoMessage = giga.roar()
    break
  case "tyrannosaurus":
    dinoMessage = rex.growl()
    break
  case "velociraptor":
    dinoMessage = raptor.awk()
    break
  // window alert message for all other selections
  default:
    alert("Invalid selection, please try again!")
}

//
dinoResult.textContent = dinoMessage;
}

// Variable and event listener created for submit button
const submitButton = document.getElementById("button");
submitButton.addEventListener("click", display);


