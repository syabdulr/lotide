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

}



const assertArraysEqual = function(array1, array2){

  let result = eqArrays(array1,array2); //store the value of whether the check is true or false

  if(result === true){
    console.log(`🟢🟢🟢 Assertion Passed: ${array1}  === ${array2}`);
  } else {
      console.log(`🔴🔴🔴 Assertion Failed: ${array1}  !== ${array2}`);
  }

}


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};

const result = letterPositions("hello");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);

module.exports = letterPositions;