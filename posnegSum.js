const posNegCount = arr => {
  const pos = arr.filter(num => num > 0).length;
  const neg = arr.filter(num => num < 0).reduce((a, b) => a + b);
  return [pos, neg];
};

console.log(posNegCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
