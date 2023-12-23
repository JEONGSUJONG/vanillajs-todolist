// const, let Type
const a = 5;
const b = 2;
let myName = "SuJong";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);
myName = "JSJ";
console.log("No! My name is " + myName);

// boolean Type
const isFat = false;
if (!isFat) {
    console.log("Go to gym");
}

// undefined, null 
let something;
console.log(something, isFat);

// Array
const num = [1, 2, 3];
console.log(num[2]);
// Array - push
num.push(true);
console.log(num);
// Array - map
const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers.map((number) => number * 2);
console.log(multipliedNumbers);

// Object
const player = {
    name: "sujong",
    age:  27,
    points: 10,
    fat: true
}
console.log(player);
console.log(player.name);
player.age = 28;
console.log(player.age);
player.lastname = " jeong "
console.log(player.name + player.lastname);
player.points += 20;
console.log(player.points);

// function 
const plus = (a, b) => {
    console.log(a + b);
};
plus(3, 4);

const arrowFunction = (...args) => {
  console.log(args);
};
arrowFunction(1, 2, 3);

function regularFunction() {
  console.log(arguments);
}
regularFunction(1, 2, 3);

const obj = {
  name: "John",
  sayHello: () => {
    console.log("Hello "+ this.name); // this는 obj를 참조하지 않음
  },
};
obj.sayHello();

const obj1 = {
  name: "John",
  sayHello: function () {
    console.log("Hello " + this.name); // this는 obj를 참조
  },
};
obj1.sayHello();

const calcultor = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};
calcultor.add(5, 5)
calcultor.minus(3, 2);
calcultor.div(10, 2);
calcultor.multi(5, 5);
calcultor.power(2, 5);