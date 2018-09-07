function firstNotRepeatingCharacter(s) {
  const hash = {};
  [...s].forEach(letter => (hash[letter] = hash[letter] + 1 || 1));
  for (const letter in hash) {
    if (hash[letter] === 1) return letter;
  }
  return '_';
}
