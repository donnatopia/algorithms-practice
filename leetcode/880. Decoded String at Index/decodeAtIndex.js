/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const decodeAtIndex = (s, k) => {
  let len = 0;
  let i = 0;

  while (len < k) {
    let char = s[i];

    if (parseInt(char) > 0) {
      len *= parseInt(char);
    } else {
      len++;
    }

    i++;
  }

  for (let j = i - 1; j >= 0; j--) {
    let char = s[j];

    if (parseInt(char) > 0) {
      len /= parseInt(char);
      k %= len;
    } else {
      if (k === 0 || k === len) {
        return s[j];
      }
      len--;
    }
  }
}

module.exports = decodeAtIndex;