/* function Game(title, description, category) {
  this.title = title;
  this.description = description;
  this.category = category;
  this.isNew = true;
}

Game.prototype.sayVideogame = function() {
  return `${this.title}`;
}



const game = new Game('Age of empire', 'bsdsadas', 'Estrategia');
const game2 = new Game('');

console.log(game); */
/* 
class Game {
  constructor(title, description, category, pin) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.pin = pin;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(title) {
    this.title = title;
  }

  static sayVideogame() {
    return 'Hola soy un videojuego';
  }

  anotherFunction() {
    return 'Otra función';
  }

}

const game = new Game('Age of empire', 'bsdsadas', 'Estrategia');
console.log(game);
console.log(game.getTitle);
game.setTitle = 'Rayman';
console.log(game);
console.log(game.anotherFunction());

class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  calcAge() {
    return 2021 - this.year;
  }
}

const person1 = new Person('Javier', 1993);

console.log(person1.calcAge());

class Student extends Person {
  constructor(name, year, course) {
    super(name, year);
    this.course = course;
  }
  sayCourse() {
    return `Estudio ${this.course}`;
  }
}

const student1 = new Student('Hernan', 1992, 'Fullstack development');
console.log(student1.sayCourse());

class Vehicle {
  constructor(wheels, engine, velMax, actualSpeed) {
    this.wheels = wheels;
    this.engine = engine;
    this.actualSpeed = actualSpeed
    this.velMax = velMax;
  }

  accelerate(speed) {
    this.actualSpeed += speed;
    return `El vehículo está viajando a ${this.actualSpeed}`;
  }

}

class Moto extends Vehicle {
  constructor(wheels, engine, velMax, actualSpeed, brand) {
    super(wheels, engine, velMax, actualSpeed);
    this.brand = brand;
  }
}

class Car extends Vehicle {
  constructor(wheels, engine, velMax, actualSpeed, brand) {
    super(wheels, engine, velMax, actualSpeed);
    this.brand = brand;
  }

  accelerate() {
    this.actualSpeed += 10;
    return `El vehículo ${this.brand} está viajando a ${this.actualSpeed}`;
  }
}

const car1 = new Car(4, 1.8, 250, 100, 'Audi');
const moto1 = new Moto(2, 0.5, 150, 100, 'Honda');
console.log(car1.accelerate());
console.log(moto1.accelerate(20)); */

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.id = Date.now();
  }
}

class UI {
  static displayBooks() {
    const storedBooks = Store.getBooks();
    storedBooks.forEach(book => UI.addBooksToList(book));
  }

  static addBooksToList(book) {
    const list = document.querySelector('#bookList');
    const row = document.createElement('tr');
    row.id = book.id;
    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>
        <a href="#" class="btn btn-danger btn-sm delete">X</a>
      </td>
    `;

    list.append(row);
  }
}

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

}

const form = document.querySelector('#form-book');

document.addEventListener('DOMContentLoaded', UI.displayBooks);

form.addEventListener('submit', e => {
  e.preventDefault();
  //Obtener los valores de los inputs;
  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#bookAuthor').value;
  const isbn = document.querySelector('#bookISBN').value;

  const book = new Book(title, author, isbn);

  UI.addBooksToList(book);

  Store.addBook(book);

})
