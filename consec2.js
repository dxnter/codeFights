const makeArrayConsecutive2 = statues => {
  let additionalStatues = 0;
  const sorted = statues.sort((a, b) => a - b);
  sorted.forEach((num, index) => {
    if (index < sorted.length - 1) {
      additionalStatues += sorted[index + 1] - num - 1;
    }
  });
  return additionalStatues;
};

console.log(makeArrayConsecutive2([2, 4, 7, 18]));
