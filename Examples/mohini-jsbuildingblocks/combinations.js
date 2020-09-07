const assert = require("assert");
const { Console } = require("console");

//Exercise: mapping numbers in an array to give result
//define a variable to store the current twoElementsCanGiveAnswer
// iteriate through the array
// if 2 numbers is equal to 17
//return twoElementsCanGiveAnswer

//Solution:

// iloop 1: i = 0;
// jloop 1: j = 1; cangiveans = 10 + 15 = 25 ; will count until bigger than elemenst[i] = 10
// jloop 2: j = 2; cangiveans = 10 + 3 = 13
// jloop 2: j = 3; cangiveans = 10 + 7 = 17
// jloop 2: j = 4; cangiveans = 10 + ??? = ???
// jloop 2: j = 5; cangiveans = 10 + ??? = ???
// jloop 2: j = 6; cangiveans = 10 + ??? = ???

const twoElementsCanGiveAnswer = (elements, expectedOutCome) => {
  // iloop
  for (let i = 0; i < elements.length; i = i + 1) {
    // jloop
    for (let j = 1; j < elements.length; j = j + 1) {
      console.log(elements[i], "and", elements[j]);
      if (elements[i] + elements[j] === expectedOutCome) {
        return true;
      }
    }
  }
  return false;
};

console.log(twoElementsCanGiveAnswer([10, 15, 3, 7]), 7);
assert(twoElementsCanGiveAnswer([10, 15, 3, 7], 17) === true);
assert(twoElementsCanGiveAnswer([15, 10, 3, 7], 17) === true);
assert(twoElementsCanGiveAnswer([10, 15, 3, 7], 16) === false);

//Exercise:mapping numbers from 2 objects
question1 = {
  "1.option 1": 0,
  "1.option 2": 2,
  "1.option 3": 7,
};
question2 = {
  "2.option 1": 1,
  "2.option 2": 3,
  "2.option 3": 5,
};
// console.log("->>>>>>>>mapping all options");

//Solution:
const allOptionsMapped = (question1, question2) => {
  for (let [key, value] of Object.entries(question1)) {
    for (let [key1, value1] of Object.entries(question2)) {
      const sumValue = question1[key] + question2[key1];
      console.log(key, "and", key1, sumValue);
    }
  }
};
allOptionsMapped(question1, question2);

//Exercise:mapping numbers in an array to give result

//Solution:
const ElementsCanGiveAnswer = (elements, expectedOutCome) => {
  let result = false;
  for (i = 0; i < elements.length; i = i + 1) {
    for (j = i + 1; j < elements.length; j = j + 1) {
      console.log(elements[i], "and", elements[j]);
      if (elements[i] + elements[j] === expectedOutCome);
      return true;
    }
    return false;
  }
};
assert(ElementsCanGiveAnswer([1, 5, 3, 9, 10], 6) === true);
assert(ElementsCanGiveAnswer([1, 5, 3, 4, 7], 8 === true));
