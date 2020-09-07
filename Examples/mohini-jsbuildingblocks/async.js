//NOT RUNNING functions
//defining/assigning/loading functions
const sleep = milliseconds => {
  console.log("sleeping...");
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const longRunningFunction = async (number, time) => {
  console.log(`longRunningFunction ${number}: starting`);
  await sleep(time);
  console.log(`longRunningFunction ${number}: ending`);
};

console.log("MAIN: Going to call long running function");
longRunningFunction(1, 2000); //running/calling the function
longRunningFunction(2, 1000); //running/calling the function
console.log("MAIN: Called the long running function");
