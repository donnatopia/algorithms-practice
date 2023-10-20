/**
 * @param {string} input
 * @return {number}
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const translateRomanNumeral = (input) => {
  if (typeof input !== 'string') return null;

  let value = 0;
  let previousDigit = 0;

  for (let i = input.length - 1; i >= 0; i--) {
    let digit = DIGIT_VALUES[input[i]];

    if (digit >= previousDigit) {
      value += digit;
      previousDigit = digit;
    } else {
      value -= digit;
    }
  }

  return value;
}

module.exports = translateRomanNumeral;
