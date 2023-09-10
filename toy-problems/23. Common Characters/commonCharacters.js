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

module.exports = commonCharacters;
