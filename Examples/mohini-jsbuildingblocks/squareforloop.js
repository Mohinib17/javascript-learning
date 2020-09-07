//write a program that will print a square
// * * * *
// *     *
// *     *
// *     *
// * * * *

console.log("This is our program");
console.log("It will print a lot of * * * * *");

const printLine = (numberOfColumns) => {
  let starLine = "";
  for (let i = 1; i <= numberOfColumns; i = i + 1) {
    starLine = starLine + " *";

    // "*"
    // "**"
    // "***"
  }
  return starLine;
};

// defining an function
const printSquare = (rows, cols) => {
  for (let i = 1; i <= rows; i = i + 1) {
    console.log(printLine(cols));
  }
};

// calling a function, with 2x parameters
printSquare(4, 4);

// printLine(2):
// **
// printLine(5):
// *****

// console.log(printLine(8));
// console.log(printLine(3));
// console.log(printLine(21));

// const rows = 4;
// const cols = 4;
// for (let i = 1; i <= rows; i++) {
//   let str = "";
//   for (let j = 1; j <= cols; j++) {
//     str += "*";
//   }
//   console.log(str);
//}

//const lineprint = (horizontal, vertical) => {
// const rows = 4;
// const cols = 4;
// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= cols; j++) {
//     symbol = "*";
//   }
//   str = " ";
// }
// console.log(symbol);
// // for (let k = i + 1; k <= 4; k++) {
//   for (let l = 1; l <= i + 1; l++) {
//     str = "*";
//     //     str = " ";
//   }
//   console.log(str);
//}
//};

//     if (((i = horizontal), (j = vertical))) console.log("*");
//     else console.log(Error);
//   }
// };
// const line = (horizontalIndentation, verticalIndentation) => {
//   let i;
//   let answer = "";
//   for (let i = 1; (i = horizontalIndentation); i++) {
//     answer = "";
//   }
//   let j;
//   for (let j = 1; (j = verticalIndentation); j++) {
//     answer = "";
//   }

//   lineprint(horizontal, vertical);
//   console.log("Test Ended, or did it");
// }
