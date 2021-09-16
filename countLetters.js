const countLetters = function(str) {
  const results = {};
  str = str.replace(' ', '');

  for (const letter of str) {
    if (!results[letter])
      results[letter] = 1;
    else
      results[letter]++;
  }

  return results;
};