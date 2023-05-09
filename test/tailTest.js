const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']); 
  });
  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const output = tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});

/*
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const output = tail(words); // no need to capture the return value since we are not checking it

assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(output.length, 2); // test if new array has one less element total of 2
*/