// Function that compares two objects to see if they have the same key-value pairs
const eqObjects = function(object1, object2) {
  // Get the keys of both objects as arrays
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // Check if the number of keys in the objects is the same
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // Loop through the keys of object1 and compare their values with those of object2
  for (const key of object1Keys) {
    // Check if object2 has the current key
    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    // If the value of the current key is an array, use the eqArrays function to compare the arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } 
    // If the value of the current key is not an array, compare the values directly
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// Function that compares two objects and prints a message to the console
const assertObjectsEqual = function(actual, expected) {
  // Get an array of keys for each object
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);

  // Check if number of properties are equal
  if (keys1.length !== keys2.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  // Set up variables to track whether the objects are equal and to build a string of properties for printing
  let areEqual = true;
  let propsStr = '{';

  // Loop over keys in the first object
  for (const key of keys1) {
    // Check if the property exists in both objects
    if (!keys2.includes(key)) {
      // If not, the objects are not equal
      areEqual = false;
      break;
    }

    // Check if the property values are equal
    if (actual[key] !== expected[key]) {
      // If not, the objects are not equal
      areEqual = false;
      break;
    }

    // Build a string of properties for printing
    propsStr += `${key}: ${actual[key]}, `;
  }

  // Remove the final comma and space, add closing brace to the string
  propsStr = propsStr.slice(0, -2) + '}';

  // Print a message to the console indicating whether the objects are equal or not, along with the properties of the first object
  if (areEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${propsStr} === ${propsStr}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${propsStr} !== ${propsStr}`);
  }
};


// Test cases
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 3 };

// Test the assertObjectsEqual function with the objects above as arguments
assertObjectsEqual(obj1, obj2); // should pass
assertObjectsEqual(obj1, obj3); // should fail

module.exports = assertObjectsEqual;
