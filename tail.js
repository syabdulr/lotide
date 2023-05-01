const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual}  !=  ${expected}`);
  }

};

const tail = function(array) { //create a function that takes an array as an argument

  let newArray = [];

  for (let x = 1; x <= array.length - 1; x++) { //take everything but the first value, so start at 1 not 0
    newArray.push(array[x]);
  }
  return newArray;

};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const output = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(output);

assertEqual(output.length, 2);