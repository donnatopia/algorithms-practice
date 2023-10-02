/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = (s) => {
  let words = s.split(' ');
  for (let i = 0; i < words.length; i++) {
    let reverse = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      reverse += words[i][j];
    }
    words[i] = reverse;
  }
  return words.join(' ');
}

module.exports = reverseWords;