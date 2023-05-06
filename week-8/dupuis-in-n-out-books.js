/*
============================================
; Title: dupuis-in-n-out-books.js
; Author: Jocelyn Dupuis
; Date: 05/01/2023
; Description: JavaScript file for In-N-Out-Books
============================================
*/

// Variables created for authors to populate string
const favBook1 = {
  isbn: "8293326565",
  title: "Walkin' After Midnight",
  pages: "216"
};

const favBook2 = {
  isbn: "0446605484",
  title: "Roses are Red",
  pages: "412"
};

const favBook3 = {
  isbn: "0451162072",
  title: "Pet Sematary",
  pages: "416"
};

// Variables created for books to populate string
const favAuthor1 = {
  name: "Joe Ricker",
  genre: "Mystery, Thriller, Noir Fiction, Crime Fiction, Short Stories",
};

const favAuthor2 = {
  name: "James Paterson",
  genre: "Thriller, Mystery, Suspense, Crime Fiction, Psychological Fiction",
};

const favAuthor3 = {
  name: "Stephen King",
  genre: "Horror Fantasy, Supernatural Fiction, Crime Fiction Suspense, Thriller",
};


// Function to register the onclick event for Display Listing button in HTML page
// Variable created for users choice of favorite book or author menu options
function display() {
  const choice = document.getElementById("bookstore-option").value;
  let output = "";
  // Switch block created with case statements for bookstore elements: books and authors
  switch (choice) {
    // Case statement for books and books table build
    case "books":
      let tblBooks = `
      <h3>Top 3 Favorite Books</h3>
      <table class="table">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Pages</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>` + favBook1.isbn + `</td>
          <td>` + favBook1.title + `</td>
          <td>` + favBook1.pages + `</td>
        </tr>
        <tr>
          <td>` + favBook2.isbn + `</td>
          <td>` + favBook2.title + `</td>
          <td>` + favBook2.pages + `</td>
        </tr>
        <tr>
          <td>` + favBook3.isbn + `</td>
          <td>` + favBook3.title + `</td>
          <td>` + favBook3.pages + `</td>
        </tr>
      </tbody>
    </table>`;

    // To display output from books menu selection
    document.getElementById("form-results").innerHTML = tblBooks;
    break;


    // Case statement for authors and author table build
    case "authors":
      let tblAuthors = `
      <h3>Top 3 Favorite Books</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>` + favAuthor1.name + `</td>
          <td>` + favAuthor1.genre + `</td>
        </tr>
        <tr>
          <td>` + favAuthor2.name + `</td>
          <td>` + favAuthor2.genre + `</td>
        </tr>
        <tr>
          <td>` + favAuthor3.name + `</td>
          <td>` + favAuthor3.genre + `</td>
        </tr>
      </tbody>
    </table>`;

    // To display output from Book menu selection
    document.getElementById("form-results").innerHTML = tblAuthors;
    break;

    // Default for when user selects --Select-- from menu to display an invalid selection alert box
    default:
      choice = alert("Invalid selection, please try again.");
  }

}
