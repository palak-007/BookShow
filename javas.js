function searchBooksByName() {
    // Get the input value
    var input = document.getElementById('searchInput').value.toUpperCase();

    // Get all book titles
    var bookTitles = document.querySelectorAll('.book-details h3');

    // Loop through each book title
    for (var i = 0; i < bookTitles.length; i++) {
        var title = bookTitles[i].innerText.toUpperCase();
        var bookItem = bookTitles[i].closest('.book-item');

        // Check if the title matches the search input
        if (title.indexOf(input) > -1) {
            bookItem.style.display = ''; // Show the book if it matches
        } else {
            bookItem.style.display = 'none'; // Hide the book if it doesn't match
        }
    }
}

