const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual}  !=  ${expected}`);
  }

};


// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and 
// return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) { //create function that takes object and value
  for (const key in object) { //for every key in object
    if (object.hasOwnProperty(key) && object[key] === value) { //if object has property key and that key value is = to value
      return key; // return key
    } // close loop
  } // close loop
  return undefined; //otherwise return undefined
};

// Test case
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // Should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should pass
assertEqual(findKeyByValue({}, "foo"), undefined); // Should pass

module.exports = findKeyByValue;