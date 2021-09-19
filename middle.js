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
const middle = function(array) {
  let array1 = []; 
  if (array.length <= 2 && array.length > 0) {
    return array1;
  } else if (array.length % 2 === 0) {
      return array1 = [array[(array.length / 2) - 1], array[array.length / 2]];
    } else {
      return array1 = array[(array.length - 1) / 2];
    }
};
