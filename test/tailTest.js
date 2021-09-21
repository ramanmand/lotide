const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail()", () => {
  it("should not modify original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!