const assertEqual = require('./assertEqual');
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` โโโAssertion Passed: ${actual} === ${expected}`);

  }
  else {
    console.log(`๐๐๐ Assertion Failed : ${actual} !== ${expected}`);
  }
};*/
const tail = function(array) {
  if (array.length < 2)
    return [];
  else
    return array.slice(1);
};
/*const tail = function(array){
 return array.slice();
};*/

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
