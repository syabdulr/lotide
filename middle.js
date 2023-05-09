// Define a function that takes array as argument
const middle = function(array) {
  // Initialize an empty array called "returnedArray"
  let returnedArray = [];

  // Calculate the index of the middle element using the length of the array divided by 2
  const middleIndex = Math.floor(array.length / 2);

  // If the array has 2 or fewer elements return returnedArray
  if (array.length <= 2) {
    return returnedArray;
  } 
  // If the array has an even number of elements, push the two middle elements into returnedArray
  else if (array.length % 2 === 0) {
    returnedArray.push(array[middleIndex - 1], array[middleIndex]);
  } 
  // If the array has an odd number of elements, push the middle element into returnedArray
  else {
    returnedArray.push(array[middleIndex]);
  }

  // Return the array containing the middle element(s) of the input array, or an empty array if there are none
  return returnedArray;
};

module.exports = middle;