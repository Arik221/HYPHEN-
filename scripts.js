// Sell a Book Form Submission
document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const condition = document.getElementById('condition').value;

    // Create a new book item with entered details
    const bookList = document.getElementById('book-list');
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
        <h3>${title}</h3>
        <p>Author: ${author}</p>
        <p>Price: $${price}</p>
        <p>Condition: ${condition}</p>
    `;

    // Append the new book item to the book list
    bookList.appendChild(bookItem);

    // Reset the form after submission
    document.getElementById('sell-form').reset();
});

// Live Search Functionality
document.getElementById('search').addEventListener('input', function(event) {
    const query = event.target.value.trim().toLowerCase();
    const books = document.querySelectorAll('.book-item');

    books.forEach(function(book) {
        const title = book.querySelector('h3').textContent.toLowerCase();
        // Check if book title contains the search query
        if (title.includes(query)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
