const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual}  !=  ${expected}`);
  }

};

const head = function(array){ //create a function that takes an array as an argument
  return array[0]; //return the first value in the array [0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");