const takeUntil = function(array, callback) {
  // take two parameters
  // function will return a slice of the arrya with elements taken from the beginning
  // keep collecting items from a provided array until the callback provided returns a truthy value
  let returned = []; //array will fill up with desired values from takeUntil
  for(let take of array){
    if(callback(take)){ //if the data in array index returns true for the callback
      break;
    }
    returned.push(take);
  }
  return returned;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);