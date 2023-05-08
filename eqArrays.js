const eqArrays = function(array1, array2){ // function takes two arrays

  if(array1.length !== array2.length){ //if the length of array1 is not truly equal to array2
    return false; // return false
  }

  for(let x = 0; x <= array1.length; x++){ //check if each element in array 1 is equal to the corresponding element in array2
    if (array1[x] !== array2[x]){
      return false; //if they are not equal, return false
    } 
    
  }

  return true; //return true if they are equal


}

module.exports = eqArrays;