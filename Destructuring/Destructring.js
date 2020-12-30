// Destructuring Assignment

let x, y;
[x, y] = [1, 2];
console.log(x, y);

// Rest pattern

[x, y, z, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z, rest);

({ x, y, ...rest } = { x: 1, y: 2, z: 4, w: 5 });
console.log(x, y, rest);

// Array Destructuring

const people = ["abdou", "anass", "abdelilah"];
let [pers1, pers2, pers3] = people;
console.log(pers1, pers2, pers3);

// Parse array returned from function

function getPeople() {
  return ["abdou", "anass", "abdelilah"];
}

[pers1, pers2, pers3] = getPeople();
console.log(pers1, pers2, pers3);

// Object Destructuring

const pers = {
  name: "abdou",
  age: 29,
  city: "tangier",
  gender: "Male",
  sayHey: function () {
    console.log(`Hello, it's me ${name}`);
  },
};

// Old ES5
// const name = pers.name,
//   age = pers.age,
//   city = pers.city;

// New ES6 Destructuring

const { name, age, city, sayHey } = pers;

console.log(name, age, city);

sayHey();
