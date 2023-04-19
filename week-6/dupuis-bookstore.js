/*
============================================
; Title: dupuis-bookstore.js
; Author: Jocelyn Dupuis
; Date: 04/18/2023
; Description: JavaScript file for Bookstore App
============================================
*/

// Variable created for books to populate string array
const books = ["Walkin' After Midnight", "Roses are Red", "Pet Sematary"];

// Variable created for authors to populate string array
const authors = ["Joe Ricker", "James Patterson", "Stephen King"];
// Sorted by ascending order
authors.sort();

// Variable created for publisher to populate string array
const publishers = ["280 Steps", "Little, Brown and Company", "Doubleday"];
// Sorted by descending order
publishers.sort();
publishers.reverse();

// Function to register the onclick event for Display Listing button in HTML page
// Variable created for users choice of bookstore menu options
function displayBookstore() {
  const choice = document.getElementById("bookstore-option").value;
  let output = "";
  // Switch block created with case statements for bookstore elements: books, authors, publishers
  switch (choice) {
    // Case statement for books and books table build
    case "books":
      output += "<h3>Books Listing</h3>";
      output += "<table class='table'>";
      output += "<th>Title</th>";
      output += "<tbody>";
      // Loop through array with rows added for books table
      for (let tblBooks = 0; tblBooks < books.length; tblBooks++) {
        output += "<tr><td>" + books[tblBooks] + "</td></tr>";
      }
      output += "</tbody>";
      output += "</table>";
      break;

    // Case statement for authors and author table build
    case "authors":
      output += "<h3>Author Listing</h3>";
      output += "<table class='table'>";
      output += "<th>Full Name</th>";
      output += "<tbody>";
      // Loop through array with rows added for authors table
      for (let tblAuthors = 0; tblAuthors < authors.length; tblAuthors++) {
        output += "<tr><td>" + authors[tblAuthors] + "</td></tr>";
      }
      output += "</tbody>";
      output += "</table>";
      break;

    // Case statement for publishers and publisher table build
    case "publishers":
      output += "<h3>Publisher Listing</h3>";
      output += "<table class='table'>";
      output += "<th>Company</th>";
      output += "<tbody>";
      // Loop through array with rows added for publishers table
      for (let tblPublishers = 0; tblPublishers < publishers.length; tblPublishers++) {
        output += "<tr><td>" + publishers[tblPublishers] + "</td></tr>";
      }
      output += "</tbody>";
      output += "</table>";
      break;

    // Default for when user selects --Select-- from menu to display an invalid selection alert box
    default:
      choice = alert("Invalid selection, please try again.");
  }
  // To display output from form results
  document.getElementById("form-results").innerHTML = output;
}

// Variable created for Display Listing button in HTML
const bookstoreButton = document.getElementById("bookstore-button");

// Event listener for Display Listing button
bookstoreButton.addEventListener("click", displayBookstore);
