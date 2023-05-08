const takeUntil = function(array, callback) { //takes an array and a callback
  // take two parameters
  // function will return a slice of the arrya with elements taken from the beginning
  // keep collecting items from a provided array until the callback provided returns a truthy value
 
  let result = [];

  for(const value of array){
    if(callback(value)){ // either x < 0 || x === ',' Regardless (this MUST return either TRUE or FALSE)
      break;
    }
    result.push(value);
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); //take data1, the second parameter is literally a function
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);