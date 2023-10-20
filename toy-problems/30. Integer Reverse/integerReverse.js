/**
 * @param {number} num
 * @return {number}
 */

const reverseInteger = (num) => {
  let n = 1;
  while (Math.floor(num / n) >= 10) {
    n *= 10;
  }

  let reversed = 0;
  let remainder = num;
  let m = 1;

  while (remainder > 0) {
    let digit = Math.floor(remainder / n);
    reversed += digit * m;
    remainder -= (digit * n);
    m *= 10;
    n /= 10;
  }

  return reversed;
}

module.exports = reverseInteger;
