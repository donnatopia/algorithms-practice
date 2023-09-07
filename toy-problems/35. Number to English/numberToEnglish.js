/**
 * @param {number} n
 * @return {string}
 */

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

const numberToEnglish = (n) => {
  if (numbersToWords[n]) return numbersToWords[n];

  if (n < 100) {
    let tens = Math.floor(n / 10) * 10;
    let remainder = n % 10 || null;
    return numbersToWords[tens] + '-' + numbersToWords[remainder];
  }

  let place = n < 1000 ? 100 : 1000;
  while (n / place > 1000) {
    place *= 1000;
  }

  let numberFloorOfPlace = Math.floor(n / place);
  let remainder = n % place;
  return numberToEnglish(numberFloorOfPlace) + ' ' + numbersToWords[place] + (remainder > 0 ? ' ' + numberToEnglish(remainder) : '');
}

module.exports = numberToEnglish;
