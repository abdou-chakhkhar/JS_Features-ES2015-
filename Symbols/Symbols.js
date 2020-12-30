// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("it s a sym2");

// console.log(sym1);
// console.log(typeof sym1);
// console.log(sym2);
// console.log(typeof sym2);

// console.log(Symbol("123") === Symbol("123"));
// console.log(`Salam ${sym2.toString()}`);

// Unique Object Keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

const KEY1 = Symbol("test");
const KEY2 = Symbol();

const ourObj = {};

// console.log(ourObj[KEY1]);
// console.log(ourObj[KEY2]);

ourObj[KEY1] = "key1";
ourObj[KEY2] = "key2";
ourObj.key3 = "key3";
ourObj.key4 = "key4";

// console.log(ourObj[KEY1]);
// console.log(ourObj[KEY2]);
//console.log(ourObj[key3]); // it provides an error because the dot notation is not acceptable for symbols
//console.log(ourObj[key4]); // it provides an error

// Symbols are not enumerable in for...in

// for (let i in ourObj) {
//   console.log(`${i}: ${ourObj[i]}`);
// }

// Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: 'prop'}));
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));

console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym")]: "props" }));
