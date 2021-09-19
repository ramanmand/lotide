const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected){
if (eqArrays(actual,expected)){
console.log(`Assertion Passed: ${actual}===${expected}`);
}
else {
  console.log(`Assertion failed: ${actual}!== ${expected}`);

};
};
const without = function (source, itemsToRemove){
  let x = source;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (x[i] === itemsToRemove[j]) {
        x.splice(i, 1);
        i--;
      }
    }
  }
  return x;
}
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);