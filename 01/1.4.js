const isPalindromePermutation = (input) => {
  const letters = input.toLowerCase();

  if (letters.lenght === 1) return true;

  let unpairedCharacters = new Set();

  for (let char of letters) {
    if (char === ' ') continue;

    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  const upairedCharacterCount = unpairedCharacters.size;

  return upairedCharacterCount <= 1;
};

console.log(isPalindromePermutation(process.argv[2]));
