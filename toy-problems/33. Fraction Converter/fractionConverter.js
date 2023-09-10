/**
 * @param {number} num
 * @return {string}
 */

const toFraction = (num) => {
  if (num < 0) return '-' + toFraction(-num);
  let denom = 1;

  while (num % 1 !== 0) {
    num *= 10;
    denom *= 10;
  }

  let gcd = 1;

  for (let i = num; i > 0; i--) {
    if (num % i === 0 && denom % i === 0) {
      gcd = i;
      break;
    }
  }

  return num/gcd + '/' + denom/gcd;
}

module.exports = toFraction;
