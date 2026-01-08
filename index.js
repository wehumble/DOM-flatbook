const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id: 1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id: 2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id: 4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id: 5,
            title: 'You Don\'t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// ============================================
// DOM MANIPULATION CODE STARTS HERE
// ============================================

// Task 1: Update the header title
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// Task 2: Get the book list container
const bookList = document.getElementById('book-list');

// Remove the placeholder element
const placeholder = document.getElementById('delete-this');
if (placeholder) {
    placeholder.remove();
}

// Task 3: Loop through each book and create elements
bookStore.books.forEach(book => {
    // Step 1: Create li element
    const bookContainer = document.createElement('li');
    bookContainer.className = 'list-li';
    
    // Step 2: Create h3 element for title
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    // Step 3: Create p element for author
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    
    // Step 4: Create img element
    const bookImage = document.createElement('img');
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;
    
    // Append elements to bookContainer
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);
    
    // Append bookContainer to bookList
    bookList.appendChild(bookContainer);
});
