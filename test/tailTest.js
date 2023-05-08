const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const output = tail(words); // no need to capture the return value since we are not checking it

assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(output.length, 2); // test if new array has one less element total of 2