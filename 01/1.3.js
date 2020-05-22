const urlify = (str, length) => {
  let newStr = '';

  for (let char of str) {
    const charToAdd = char === ' ' ? '%20' : char;
    newStr += charToAdd;
  }

  return newStr;
};

// ??

console.log(urlify(process.argv[2], process.argv[3]));
