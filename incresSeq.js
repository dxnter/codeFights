const almostIncreasingSequence = sequence =>
  sequence.some((number, index) => {
    const removedNum = [...sequence].slice(index, 1);
  });

console.log(almostIncreasingSequence([1, 3, 2]));
