// https://codefights.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

const lateRide = n => {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;
  const format = time =>
    time
      .toString()
      .split('')
      .map(Number);

  return [...format(hours), ...format(minutes)].reduce((a, b) => a + b);
};
