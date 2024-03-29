/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = (digits) => {
  const lib = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  let combos = [];

  if (digits.length === 1) {
    return lib[digits[0]];
  }

  if (digits.length > 1) {
    let letters = lib[digits[0]];
    letters.forEach((letter) => {
      let remainingCombos = letterCombinations(digits.slice(1));
      remainingCombos.forEach(remainingCombo => {
        combos.push(letter + remainingCombo);
      })
    })
  }

  return combos;
}

module.exports = letterCombinations;