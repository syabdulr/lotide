const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual}  !=  ${expected}`);
  }

};

const countLetters = function(string){
  //take in a sentance as a string
  // return a count of each letter in that sentance

  //the return value should be an object
  let letterCount = {};

  for(let count of string) {

    if(count !== ' ' && count !== '.'){

      if(letterCount[count]){
    
        letterCount[count]++
  
      } else {
        letterCount[count] = 1;
      }
    }
    
  }

  console.log(letterCount);
  return letterCount;
}

countLetters("This is a sentence.");

module.exports = countLetters;