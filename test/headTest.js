const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'head' for ['5']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });
});

