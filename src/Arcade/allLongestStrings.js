// Given an array of strings, return another array containing all of its longest strings.

const allLongestStrings = arr => {
  const longestLength = arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
  return arr.filter(str => str.length === longestLength);
};

console.log(allLongestStrings(['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa']));
