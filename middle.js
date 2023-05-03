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

const middle = function(array) {
  let returnedArray = [];
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return returnedArray;
  } else if (array.length % 2 === 0) {
    returnedArray.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    returnedArray.push(array[middleIndex]);
  }
  return returnedArray;
};


let middleValue = [9,10,11,12,13,14,15,16];

middle(middleValue);


middleValue = [6,7,8,9,10,11,12];

middle(middleValue);

middleValue = [1,2];

middle(middleValue);