const assertEqual = require('./assertEqual.js');


const countOnly = function(allItems, itemsToCount){
  //the function should report back how many instances of each string were found in the allItems array of strings

  //empty object to store the values of the names if they are in the string array
  const counts = {};

 //this for of loop checks through allItems array (firstNames array)
  for(const val of allItems){
    //for every name in the firstNames array, check if its in the itemsToCount object, evaluate true
    if(itemsToCount[val]){
      //check if the name is already in the array counts
      if(counts[val]){
        //increment the value of the key by one
        counts[val]++
      } else { // otherwise
        //if the name is not in the counts array, then it should be added into it by assigning a value of 1
        counts[val] = 1;
      }
    }
  }
  return counts;// return counts;
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
