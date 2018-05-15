// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  let count = 0;
  for (char of s1) {
    if (s2.includes(char)) {
      count++;
      s2 = s2.replace(char, '');
    }
  }
  return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
