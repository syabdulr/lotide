const without = function(array1, array2) {
  let leftOver = [];

  for (let x = 0; x < array1.length; x++) {
    let found = false;
    for (let i = 0; i < array2.length; i++) {
      if (array1[x] === array2[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      leftOver.push(array1[x]);
    }
  }

  return leftOver;
};

//test if arrays are equal
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


//display a message based on if eqArrays is true or false
const assertArraysEqual = function(array1, array2){

  let result = eqArrays(array1,array2); //store the value of whether the check is true or false

  if(result === true){
    console.log(`🟢🟢🟢 Assertion Passed: ${array1}  === ${array2}`);
  } else {
      console.log(`🔴🔴🔴 Assertion Failed: ${array1}  !== ${array2}`);
  }

}


const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);
assertArraysEqual(result, ["hello", "world"]); // => true
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true
