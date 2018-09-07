// https://codefights.com/arcade/code-arcade/intro-gates/HEsmEacHr2s9wahjr

const maxMultiple = (divisor, bound) => {
  let current = bound;
  while (current > 0) {
    if (current % divisor === 0) {
      return current;
    }
    current--;
  }
};

console.log(maxMultiple(3, 10));
