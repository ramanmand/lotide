//const assertEqual = require('./assertEqual');
const assertEqual = function(actual, expected) {
if (actual === expected) {
    console.log(` โโโAssertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`๐๐๐ Assertion Failed : ${actual} !== ${expected}`);
}
 };

const head = function(array) {
  return array[0];
};
module.exports = head;
//assertEqual(head([5,6,7]),5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


//TEST CODE
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");