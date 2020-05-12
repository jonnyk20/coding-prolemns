const hasUniqueCharacters = (string) => {
  const uniqueCharacters = new Set();

  for (let character of string) {
    if (uniqueCharacters.has(character)) return false;
    uniqueCharacters.add(character);
  }

  return true;
};

console.log(hasUniqueCharacters(process.argv[2]));
