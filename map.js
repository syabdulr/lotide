const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for(let x = 0; x < array1.length; x++){
    if (array1[x] !== array2[x]){
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(array1, array2){
  let result = eqArrays(array1,array2);
  if(result === true){
    console.log(`🟢🟢🟢 Assertion Passed: ${array1}  === ${array2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1}  !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // Output: Assertion Passed: [ 'g', 'c', 't', 'm', 't' ]  === [ 'g', 'c', 't', 'm', 't' ]

module.exports = map;