// Iterator Example
function namesIterator(names) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Create an array of names
const namesArr = ["abdou", "hatim", "chanko"];

// Init iterator and pass in the names array
const names = namesIterator(namesArr);

// iterate by yourself
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// Generator Example
function* sayNames() {
  yield "allall";
  yield "souad";
  yield "tirigo";
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Creator
function* creatIds() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const gen = creatIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
