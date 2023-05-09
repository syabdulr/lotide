const assertArraysEqual = require('../assertArraysEqual'); // import assertArraysEqual


// Test Code

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false