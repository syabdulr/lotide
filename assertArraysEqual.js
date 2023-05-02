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


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
