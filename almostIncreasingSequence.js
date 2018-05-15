// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

const almostIncreasingSequence = sequence =>
  sequence
    .map((removedInt, index) => sequence.filter((int, i) => i !== index))
    .some(singleSeq => singleSeq.every((int, i, currentArr) => i === 0 || currentArr[i - 1] < int));
