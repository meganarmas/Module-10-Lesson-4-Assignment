// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};


// Task 2: Implement a method within the Book object to display book information.

Book.prototype.info = function(){
    console.log(`Title ${this.title}. Author: ${this.author}. Pages ${this.pages}`)
};

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let library = [];

function addBook(book) {
    library.push(book);
}

function searchTitle(title) {
    return library.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
);

}

function searchAuthor(author) {
    return library.filter(book =>
        book.author.toLowerCase().includes(author.toLowerCase())
    );
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function filterPagesby125(){
    return library.filter(book => book.pages > 125);
};


function mapBooks(){
    return library.map((book) => ({
        title: `Title ${book.title}`,
        author: `Author ${book.author}`,
    }));
}

addBook(new Book("Things Have Gotten Worse Since We Last Spoke", "Eric LaRocca", 120));
addBook(new Book("Picture of Dorian Gray", "Oscar Wilde", 252));
addBook(new Book("Time is a Mother", "Ocean Vuong", 128));

console.log(searchTitle("Time is a Mother"));
console.log(searchAuthor("Oscar Wilde"));
console.log(filterPagesby125(125));
console.log(mapBooks());