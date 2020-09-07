const assert = require("assert");
const { Console } = require("console");

//Exercise:
//  write a function that takes a name as input, and prints: Goodmornin, John

//Solution 1:
const greeting = () => {};
console.log("Goodmornin, John");

//Solution 2:
const { profile } = require("console");
const nameToPassIntoFunc = "John";
const greet = (name) => {
  console.log(`Goodmornin, ${name}`);
};
greet(nameToPassIntoFunc);
greet("Mohini");
greet("Samina");
greet("Morne");

//Example :
const F = (x) => {
  console.log(x + 5);
};

F(5);
F(2);
F("Hallo");
// F(x) = x + 5;
// F(5) = 5 + 5 = 10;
// F(2) = 7;
