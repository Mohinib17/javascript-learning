const assert = require("assert");
const { Console } = require("console");

//Exercise: takes 2 numbers and returns the sum
// write a function that takes 2 numbers, and gives you the sum of them

//Solution:
const numbers = (x, y) => {
  console.log(x + y); // Better functions should always return something //return x + y
};
numbers(6, 8);
numbers(8, 10);
numbers("8", 10); //810
numbers("Hallo, ", "world"); // Hallo, world
//Multiple tests to confirm the validity of the function

const sum = (x, y) => {
  return x + y;
};

function oldSum(x, y) {
  return x + y;
}

const aCertainUseCase = sum(6, 8);
assert(sum(6, 8) === 14);
console.log(14);

//Exercise: restrictions on parameters and return string
//create a function that takes two parameters, a person's name and their birth year... the function must return a string for example
//CalculateAge("John", 1990) === "John you will have your 30th birthday this year..."

const CalculateAge = (doB) => {
  return 2020 - doB;
};
assert(CalculateAge(1990) === 30);
console.log(CalculateAge(1990));

const birthday = (name, doB) => {
  return (
    name +
    " you will have your" +
    CalculateAge(doB) +
    "th birthday this year..."
  );
};

assert(
  birthday("John2", 1990) ===
    "John2 you will have your30th birthday this year..."
);

console.log(birthday("John2", "1988"));
console.log(birthday("John", "1989"));

//Exercise: measures of temperatures, input degreeC and output degreeF
// write a function that takes as
// input, a number (which represents temperature in degreeC), and then gives as
// output, a number (which represents temperature in degreeF)
// the way to convert degreeC into degreeF is:
//°F = °C * 1.8000 + 32.00

//Solution:

// 25°C= 77°F
// 30°C= 86°F
// 33°C= 91.4°F
// 35°C= 95°F
// 40°C= 104°F
// 180°C= 356°F

const temperature = (degreeC) => {
  const farenheit = String(degreeC * 1.8 + 32.0) + "°F";
  return farenheit;
};
console.log(temperature(31));

assert(temperature(25) === "77°F");
assert(temperature(30) === "86°F");
assert(temperature(33) === "91.4°F");
assert(temperature(35) === "95°F");
assert(temperature(40) === "104°F");
assert(temperature(180) === "356°F");

//Exercise: measures of temperatures, if else statement
// take this function and add another parameter, "type"
// if type is "F" convert the degreeC to Farenheit
// else convert it to Kelvin

//Solution:
// This is a function.  The function is called temperture.  The function takes 3 parameters,
// and coverts degreeC into fahrenheit and degreeC  into Kelvin.
const degreeCToUnitOfTemp = (degreeC, unitOfTemp) => {
  if (unitOfTemp === "F") {
    const farenheit = degreeC * 1.8 + 32.0;
    return farenheit;
  } else if (unitOfTemp === "K") return (kelvin = degreeC + 273.15);
};

console.log(degreeCToUnitOfTemp(3, "F"));

assert(degreeCToUnitOfTemp(25, "F") === 77);
assert(degreeCToUnitOfTemp(25, "K") === 298.15);

//Exercise:temperature checker - asserts must be successful

//Solution:
const temperatureChecker = (degreeC) => {
  if (degreeC <= 0) {
    return "Ice Cold";
  } else if (degreeC <= 15 && degreeC > 0) {
    return "Coolish";
  } else if (degreeC <= 25) {
    return "Nice";
  } else if (degreeC <= 35) {
    return "Quite Warm";
  } else if (degreeC <= 45) return "Are you in Durban?";
};
console.log(temperatureChecker(1));

assert(temperatureChecker(0) === "Ice Cold");
assert(temperatureChecker(15) === "Coolish");
assert(temperatureChecker(25) === "Nice");
assert(temperatureChecker(35) === "Quite Warm");
assert(temperatureChecker(45) === "Are you in Durban?");
