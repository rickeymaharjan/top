function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

function Enemy(name) {
  this.name = name;
  this.marker = "^";
}

Enemy.prototype.sayName = function () {
  console.log("HAHAHAHAHAHA");
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype
Object.setPrototypeOf(Enemy.prototype, Player.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
const enemy = new Enemy("alice");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'

enemy.sayName();
enemy.getMarker();
