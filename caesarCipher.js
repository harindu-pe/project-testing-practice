function caesarCipher(str, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let shiftedArray = [];

  for (let i = 0; i < str.length; i++) {
    let strLetter = str[i];
    let alphabetIndex = alphabet.indexOf(strLetter);
    let newIndex = counterWrap(alphabetIndex, shift);
    shiftedArray.push(alphabet[newIndex]);
  }
  return shiftedArray.join("");
}

// returns shifted index
function counterWrap(index, shiftNum) {
  let temp = index + shiftNum;
  return temp % 26;
}

module.exports = caesarCipher;
