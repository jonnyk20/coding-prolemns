const isPermutation = (str1, str2) => {
  const characterCount1 = {};
  const characterCount2 = {};

  for (let char of str1.toLowerCase()) {
    const currentCount = characterCount1[char];
    characterCount1[char] = !!currentCount ? currentCount + 1 : 1;
  }

  for (let char of str2.toLowerCase()) {
    const currentCount = characterCount2[char];
    characterCount2[char] = !!currentCount ? currentCount + 1 : 1;
  }

  for (let char in characterCount1) {
    if (characterCount2[char] !== characterCount1[char]) return false;
  }

  return str1.length == str2.length;
};

// 2x + y
// same lenght -> 2x + x -> 3x -> x

var checkPermute = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

// sort O(nlogn)
// split O(n)
// join O(n)
// nlogn + 2n
// n(logn)
// n
// same length -> 2(xlogx) -> xlogx

console.log(isPermutation(process.argv[2], process.argv[3]));
