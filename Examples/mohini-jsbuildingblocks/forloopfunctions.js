const assert = require("assert");
const { Console } = require("console");

//Exercise:find biggest value in array
// define a variable to store the current biggest value
// iterate through each of the elements to compare them // go through the list // looked through the list
// the first number compared will always be the biggest
// compare the current element with the previous champion/biggestnumber

//Solution:
const findBiggestValue = (someArray) => {
  let BiggestValue;
  for (let x = 0; x < someArray.length; x = x + 1) {
    if (x === 0) {
      BiggestValue = someArray[x];
    } else {
      if (someArray[x] > BiggestValue) BiggestValue = someArray[x];
      {
      }
    }
  }
  return BiggestValue;
};
console.log(findBiggestValue([3, 7, 1]));

assert(findBiggestValue([3, 7, 1]) === 7);
assert(findBiggestValue([1, 4, 6, 10]) === 10);
assert(findBiggestValue([10, 4, 6, 1]) === 10);
assert(findBiggestValue([1, 4, 10, 6]) === 10);

//Exercise:find smallest value in array

//Solution:
const findSmallestValue = (anotherArray) => {
  let SmallestValue;
  for (let y = 0; y < anotherArray.length; y = y + 1) {
    if (y === 0) {
      SmallestValue = anotherArray[y];
    } else {
      if (anotherArray[y] < SmallestValue) SmallestValue = anotherArray[y];
      {
      }
    }
  }
  return SmallestValue;
};
console.log(findSmallestValue([3, 6, 1]));
assert(findSmallestValue([3, 6, 1]) === 1);

//Exercise:find the sum of the array

//Solution:
// create SUMANS = 0
// 1. take SUMANS and add it to 3 = 3
// 2. take SUMANS(3) and add it to 6 = 9
// 2. take SUMANS(9) and add it to 1 = 10
// 3. take SUMANS(10) and add it to 2 = 12
// finally , return SUMANS

const findSumOfAllElements = (thirdArray) => {
  let SUMANS = 0;
  for (let z = 0; z < thirdArray.length; z = z + 1) {
    SUMANS = SUMANS + thirdArray[z];
  }
  return SUMANS;
};

console.log(findSumOfAllElements([3, 6, 1, 2]));

assert(findSumOfAllElements([3, 6, 1, 2]) === 12);
assert(findSumOfAllElements([3, 6, 2, 2]) === 13);
assert(findSumOfAllElements([3, 6, 1]) === 10);
assert(findSumOfAllElements([3]) === 3);
assert(findSumOfAllElements([3, 6, 1, 2, 3]) === 15);

//Exercise:find the average of the array

//Solution:
// create AveOfAllElements =0
// take AveOfAllElements(0) + 3 and divide 3 = 1
// take AveOfAllElements(1) + 6 and divide 3 = 2
// take AveOfAllElements(2) + 3 and divide 3 = 1.6667

// sumOfElements = sumOfElements + AverageArray[a]/AverageArray.length;
// loop 1: sumOfEleements = 0 + 3/3 = 1
// loop 2: sumOfleements = 1 + 6/3 = 3
// loop 3: sumosdafoiud= 3 + 3/3 = 4
// return(4)

const findAveOfAllElements = (AverageArray) => {
  let sumOfElements = 0;
  for (let a = 0; a < AverageArray.length; a = a + 1) {
    sumOfElements = sumOfElements + AverageArray[a];
  }
  let AveOfAllElements = sumOfElements / AverageArray.length;
  return AveOfAllElements;
};
console.log(findAveOfAllElements([3, 6, 3]));

assert(findAveOfAllElements([3, 6, 3]) === 4);
assert(findAveOfAllElements([3, 6, 1, 22]) === 8);

//Exercise:Multiple the numbers in the array

//Solution:

const findMultipleAllElements = (MultipleArray) => {
  let AllElements = 1;
  for (let a = 0; a < MultipleArray.length; a = a + 1) {
    AllElements = AllElements * MultipleArray[a];
  }
  return AllElements;
};
console.log(findMultipleAllElements([2, 3, 4]));

assert(findMultipleAllElements([2, 3, 4]) === 24);

//Exercise:Combining the sum and average function into a single function

//Solution:
const findSumandAveAllElements = (Array) => {
  let AVEANS = 0;
  for (let zz = 0; zz < Array.length; zz = zz + 1) {
    AVEANS = AVEANS + Array[zz] / Array.length;
  }
  return AVEANS;
};
console.log(findSumandAveAllElements([3, 6, 1, 2]));

assert(findSumandAveAllElements([3, 6, 1, 2]) === 3);
assert(findSumandAveAllElements([3, 6, 3, 4]) === 4);

//Exercise:Split the string, each word on a different line

//Solution:
const tamperWithString2 = (greeting) => {
  const splitArray = greeting.split("-");
  const str = "How are you doing today?";
  const res = str.split(" ");
  const x = "This is a string";
  const xArray = x.split(" ");
  for (let i = 0; i < xArray.length; i = i + 1) {
    console.log(xArray[i]);
  }
  xArray[xArray.length - 1] = "NICE";
  for (let i = 0; i < xArray.length; i = i + 1) {
    console.log(xArray[i]);
  }
};

//Exercise:Split string, remove and add to the string
// console.log(tamperWithString("Hallo-there-John"));
// assert(tamperWithString("Hallo-there-John", "Samina") === "Hallo-there-Samina");
// assert(tamperWithString("Hallo-there-John", "Mohini") === "Hallo-there-Mohini");

//Solution:
const tamperWithString = (fmessage, name) => {
  const wordArray = fmessage.split("-");
  wordArray[wordArray.length - 1] = name;
  let finalResult = "";
  for (let j = 0; j < wordArray.length; j = j + 1) {
    if (j === 0) {
      finalResult = wordArray[j];
    } else {
      finalResult = finalResult + "-" + wordArray[j];
    }
  }
  return finalResult;
};

console.log(tamperWithString("Hallo-there-John", "Samina"));
assert(tamperWithString("Hallo-there-John", "Samina") === "Hallo-there-Samina");
assert(tamperWithString("Hallo-there-John", "Mohini") === "Hallo-there-Mohini");

const tamperWithString3 = (fmessage, name) => {
  const wordArray = fmessage.split("-");
  const nameToReplace = wordArray[wordArray.length - 1];
  return fmessage.replace(nameToReplace, name);
};

console.log(tamperWithString3("Hallo-there-John", "Samina"));
assert(
  tamperWithString3("Hallo-there-John", "Samina") === "Hallo-there-Samina"
);
assert(
  tamperWithString3("Hallo-there-John", "Mohini") === "Hallo-there-Mohini"
);

const tamperWithStringOneLiner = (fmessage, name) => {
  return fmessage.replace(
    fmessage.split("-")[fmessage.split("-").length - 1],
    name
  );
};

assert(
  tamperWithStringOneLiner("Hallo-there-John", "Samina") ===
    "Hallo-there-Samina"
);
assert(
  tamperWithStringOneLiner("Hallo-there-John", "Mohini") ===
    "Hallo-there-Mohini"
);
