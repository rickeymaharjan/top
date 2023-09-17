// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// Note: It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

// console.log(theHobbit.info());

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;

  this.info = () => {
    return `${name} by ${author}, ${pages} pages, ${status}`;
  };
}

Book.prototype.sayHello = () => {
  console.log("Hello");
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());
theHobbit.sayHello();

console.log(theHobbit.hasOwnProperty("name"));
console.log(theHobbit.hasOwnProperty("sayHello"));

console.log(Book.prototype.hasOwnProperty("sayHello"));
console.log(Book.prototype.hasOwnProperty("valueOf"));

theHobbit.valueOf();
