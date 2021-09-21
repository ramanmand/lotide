const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#midddle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});