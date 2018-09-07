// https://codefights.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) return 0;
  for (let i = 2; i <= 10; i++) {
    if (s < min1 + min2_10 * (i - 1)) {
      return i - 1;
    }
  }
  return 10 + Math.floor((s - min2_10 * 9 - min1) / min11);
}

console.log(phoneCall(3, 1, 2, 20));
