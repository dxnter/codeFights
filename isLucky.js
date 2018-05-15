/* Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
*/

const isLucky = n => {
  const halves = [
    n
      .toString()
      .substr(0, n.toString().length / 2)
      .split(''),
    n
      .toString()
      .substr(n.toString().length / 2)
      .split(''),
  ];

  const sum = ints => ints.map(Number).reduce((a, b) => a + b);
  return sum(halves[0]) === sum(halves[1]);
};

console.log(isLucky(1230));
