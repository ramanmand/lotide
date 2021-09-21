const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail()", () => {
  it("should not modify original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });
});