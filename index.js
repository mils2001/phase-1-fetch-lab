// Fetch books from the API
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      console.log("Books:", data);  // Log the books for debugging
      renderBooks(data);            // Pass data to renderBooks
    })
    .catch(error => console.error('Error fetching books:', error));
}

// Render book titles into the DOM
function renderBooks(books) {
  const booklist = document.getElementById('books'); // Get the <ul> element

  books.forEach(book => {
    const bookItem = document.createElement('li');   // Create <li> for each book
    bookItem.textContent = book.name;                // Set the book title
    booklist.appendChild(bookItem);                  // Add <li> to <ul>
  });
}

// Fetch books when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Only call fetchBooks here
});

