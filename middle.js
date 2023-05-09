
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

module.exports = middle;