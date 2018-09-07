// The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.

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
