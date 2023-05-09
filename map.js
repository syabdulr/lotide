// Define the map function, which takes an array and a callback function as arguments
const map = function(array, callback) {
  // Create an empty array to store the results
  const results = [];
  // Iterate through each item in the array and apply the callback function to it, pushing the result to the results array
  for (let item of array) {
    results.push(callback(item));
  }
  // Return the results array
  return results;
};

// Define a helper function called eqArrays, which compares two arrays for equality
const eqArrays = function(array1, array2){
  // If the arrays have different lengths, they are not equal
  if(array1.length !== array2.length){
    return false;
  }
  // Iterate through each element in the arrays and compare them. If any elements are different, the arrays are not equal
  for(let x = 0; x < array1.length; x++){
    if (array1[x] !== array2[x]){
      return false;
    } 
  }
  // If all elements are the same, the arrays are equal
  return true;
};

// Define a helper function called assertArraysEqual, which prints a message indicating whether two arrays are equal or not
const assertArraysEqual = function(array1, array2){
  // Use the eqArrays function to determine whether the arrays are equal
  let result = eqArrays(array1,array2);
  // Print a message indicating whether the arrays are equal or not
  if(result === true){
    console.log(`🟢🟢🟢 Assertion Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1}  !== ${array2}`);
  }
};

// Define an array called words
const words = ["ground", "control", "to", "major", "tom"];

// Call the map function with words and a callback function that takes the first letter of each word, and store the results in a variable called results1
const results1 = map(words, word => word[0]);

// Use the assertArraysEqual function to compare the results of the map function to the expected output
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// Export the map function so that it can be used in other files
module.exports = map;
