const assertArraysEqual = require('../assertArraysEqual'); // import assertArraysEqual
const middle = require('../middle');



// Test Code
let middleValue = [9,10,11,12,13,14,15,16];
let returnedArray = middle(middleValue);
let answer = [12,13]
assertArraysEqual(returnedArray, answer);


middleValue = [6,7,8,9,10,11,12];
returnedArray = middle(middleValue);
answer = [9]
assertArraysEqual(returnedArray, answer);