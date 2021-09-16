// const assertEqual = function(actual, expected) {
//   if (actual === expected)
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   else
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = function(object, value){
  for (key in object){
    if (object[key] === value)
      return key
  }
  return undefined
}

module.exports = findKeyByValue;

////Test code
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Dark"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Big Bang Show", undefined);