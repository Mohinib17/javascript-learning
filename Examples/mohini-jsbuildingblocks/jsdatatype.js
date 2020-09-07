// # VARIABLES/VALUES
// assignment to varialbles
var x = 1;
let y = 2;
const z = 3; // assigning to value

// # FUNCTIONS
// this is an algebraic function. The function is called 'f', and it has one parameter 'x'. The body of the function is `x + 1`
// f(x) = x + 1 = 2

// Below is also a function, it is called myOtherFunction
// it has 1x parameter, z
// function body is blank
// this is the newer way of defining functions
const myOtherFunction = z => {
  const zz = 2;
  var xx = 3;
}; // assigning to function

// Below is a function, called myFunction
// it has 2x parameters, x and y
// the function body is blank
// this is the old way of defining functions
function myFunction(x, y) {}

// # BOOLEAN (TRUE/FALSE)
const booleanx = true;
const booleany = false;
if (booleany) console.log('it was true');
else console.log('it was false');

// # STRING
const someName = 'aname'; //  can also ""

// # INTEGERS (NUMBERS)
const seven = 7;

// # FLOATING POINT
const floatx = 1.4;
const pi = 3.142;
console.log(floatx + 2);

// # ARRAYS AND LISTS
// the natural numbers = 0, 1, 2 ...
// we start counting from 0

const fruits = ['apple', 'banana', 'bigapple']; //[0,1,2,..., n]
const basket = ['kiwi'];

console.log('This should print out banana: ' + fruits[1]);
fruits.forEach((item, index, array) => {
  console.log(item, index);
});

console.log('The basket contents:', basket); //[]
basket.push('orange');
console.log('The basket contents:', basket); // orange
basket.push('apple');
console.log('The basket contents:', basket); // orange apple
basket.pop();
console.log('The basket contents:', basket); // orange
basket.push(78);
console.log('The basket contents:', basket); // The basket contents: [ 'kiwi', 'orange', 78 ]

// # OBJECTS/JSON/MAPS/DICTIONARY/LOOKUP
// JSON - JavaScript Object Notation
// key -> value pairs
// dictionary, you Jump to the correct, find the word, and then see definition
const blankcar = {};
const car = {
  numberOfWheels: 5,
  color: 'blue', //this one is overwritten
  color: 'green',
  weight: 1500
};

console.log('This should print blue: ', car['color']);
console.log('This should print the number of wheels: ', car['numberOfWheels']);
console.log('The dot notation is the most nice: ', car.weight);

console.log('END');
console.log();
