const tail = function(array) { //create a function that takes an array as an argument

  let newArray = [];

  for (let x = 1; x <= array.length - 1; x++) { //take everything but the first value, so start at 1 not 0
    newArray.push(array[x]);
  }
  return newArray;

};

module.exports = tail;

