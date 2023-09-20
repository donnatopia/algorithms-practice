/**
 * @param {string} digitStr
 * @return {string[]}
 */

const telephoneWords = (digitStr) => {
  let words = [];
  if (digitStr.length === 0) return words;

  let letters = phoneDigitsToLetters[digitStr[0]].split('');
  let remainingWords = telephoneWords(digitStr.substring(1));

  if (remainingWords.length === 0) return letters;

  letters.forEach((letter) => {
    remainingWords.forEach((remainingWord) => {
      words.push(letter + remainingWord);
    })
  });

  return words;
}

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

module.exports = telephoneWords;
