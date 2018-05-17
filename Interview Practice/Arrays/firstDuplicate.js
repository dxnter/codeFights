function firstDuplicate(a) {
  for (const i of a) {
    const posi = Math.abs(i) - 1;
    if (a[posi] < 0) return posi + 1;
    a[posi] = a[posi] * -1;
  }

  return -1;
}

export default firstDuplicate;
