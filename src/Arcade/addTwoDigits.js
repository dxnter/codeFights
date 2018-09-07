// You are given a two-digit integer n. Return the sum of its digits.

const addTwoDigits = n =>
  n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
