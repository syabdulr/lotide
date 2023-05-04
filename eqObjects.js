// define a function named "assertEqual" that takes two arguments, actual and expected
const assertEqual = function(actual, expected) {
  // check if actual and expected values are strictly equal
  if (actual === expected) {
    // if they are equal, log a passing message to the console
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    // if they are not equal, log a failing message to the console
    console.log(`🔴🔴🔴 Assertion Failed: ${actual}  !=  ${expected}`);
  }
};

// define a function named "eqArrays" that takes two array arguments, array1 and array2
const eqArrays = function(array1, array2) {
  // check if the length of array1 and array2 are equal
  if (array1.length !== array2.length) {
    // if they are not equal, return false
    return false;
  }

  // iterate over the elements of array1 using a for loop
  for (let i = 0; i < array1.length; i++) {
    // check if the element of array1 at the current index is equal to the corresponding element of array2
    if (array1[i] !== array2[i]) {
      // if they are not equal, return false
      return false;
    }
  }

  // if all elements are equal, return true
  return true;
};

// define a function named "eqObjects" that takes two object arguments, object1 and object2
const eqObjects = function(object1, object2) {
  // get the keys of object1 and object2 and store them in separate arrays
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // check if the length of object1Keys and object2Keys are equal
  if (object1Keys.length !== object2Keys.length) {
    // if they are not equal, return false
    return false;
  }

  // iterate over the keys of object1 using a for...of loop
  for (const key of object1Keys) {
    // check if the corresponding key exists in object2
    if (!object2.hasOwnProperty(key)) {
      // if it doesn't exist, return false
      return false;
    }

    // check if the value associated with the key in object1 and object2 are both arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if they are both arrays, call the eqArrays function to compare them
      if (!eqArrays(object1[key], object2[key])) {
        // if the arrays are not equal, return false
        return false;
      }
    } else {
      // if the values are not arrays, check if they are equal
      if (object1[key] !== object2[key]) {
        // if they are not equal, return false
        return false;
      }
    }
  }

  // if all keys and values are equal, return true
  return true;
};

// define three objects
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// call the eqObjects function with the first two objects and pass the result to the assertEqual function
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // should pass

// call the eqObjects function with the first and third objects and pass the result to the assertEqual function
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // should pass
