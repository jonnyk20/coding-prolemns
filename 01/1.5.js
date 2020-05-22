const isOneOrZeroEditsAway = (a, b) => {
  const str1 = a.toLowerCase();
  const str2 = b.toLowerCase();

  // same string
  if (str1 === str2) return true;

  const str1Length = str1.length;
  const str2Length = str2.length;

  // replaced: aLength is same as bLength; one character is different
  if (str1Length === str2Length) {
    let differingCharacters = 0;
    for (let i = 0; i < str1Length; i++) {
      if (str1[i] !== str2[i]) differingCharacters += 1;
    }

    return differingCharacters === 1;
  }

  // removed: bLength = aLength - 1; every character in b matches one in a;
  if (str2Length === str1Length - 1) {
    let trackingIndex = 0;
    let differingCharacters = 0;

    for (let i = 0; i < str2Length; i++) {
      if (str1[i] !== str2[trackingIndex]) {
        differingCharacters += 1;
      } else {
        trackingIndex += 1;
      }
    }
    return differingCharacters < 2;
  }

  // added: bLength = aLength + 1; every character in a matches one in b;
  if (str1Length === str2Length - 1) {
    let trackingIndex = 0;
    let differingCharacters = 0;

    for (let i = 0; i < str1Length; i++) {
      if (str2[i] !== str1[trackingIndex]) {
        differingCharacters += 1;
      } else {
        trackingIndex += 1;
      }
    }
    return differingCharacters < 2;
  }

  return false;
};

console.log(isOneOrZeroEditsAway(process.argv[2], process.argv[3]));
