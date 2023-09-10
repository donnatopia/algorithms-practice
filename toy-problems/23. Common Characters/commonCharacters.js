/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const commonCharacters = (str1, ...otherStrs) => {
  let commonStr = '';
  let letters = {};

  for (let i = 0; i < otherStrs.length; i++) {
    let otherStrLetters = new Set(otherStrs[i]);
    for (let letter of otherStrLetters) {
      letters[letter] ? letters[letter]++ : letters[letter] = 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    if (letters[letter] === otherStrs.length) {
      letters[letter]++;
      commonStr += letter;
    }
  }

  return commonStr;
}

// const commonCharactersSoln = (str, ...otherStrings) => {
//   let string = str.split('');

//   // store each character in the string in an object
//   let letters = string.reduce((obj, letter) => {
//     // only accept lowercase letters
//     if (letter.match(/[a-z]/i)) obj[letter] = 0;
//     return obj;
//   }, {});

//   // iterate through each string
//   // increment letter count if exists in letter object
//   otherStrings.forEach((string, index) => {
//     for (let i = 0; i < string.length; i++) {
//       let letter = string[i];
//       if (letters[letter] === index) letters[letter]++;
//     }
//   });

//   // if letter is included in all strings, reduce and return
//   return string.reduce((string, letter) => {
//     if (letters[letter] === otherStrings.length) {
//       string += letter;
//       letters[letter]++;
//     }
//     return string;
//   }, '');
// }

module.exports = commonCharacters;

