const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual}  !=  ${expected}`);
  }

};

//create function that takes object and callback

const findKey = function(object, callBack){ // passai


  for(let key in object){ //for of cannot be used to look through objects
    if(callBack(object[key])){ // object[key] references the VALUE
      console.log(object[key]);  
        return key;
      } 
    }
    return undefined;
}

//scan object and return first key, second param callback would return truthy value

// if no key is fouind return undefined

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma"); // => "noma"

