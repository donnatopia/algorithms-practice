/**
 * @param {string} s
 * @return {number}
 */

const minDeletions = (s) => {
  let dict = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    dict[letter] = dict[letter] ? dict[letter] + 1 : 1;
  }

  let frequencies = Object.values(dict).sort((a, b) => b - a);
  let deletions = 0;

  for (let i = 0; i < frequencies.length - 1; i++) {
    while (frequencies[i] <= frequencies[i + 1]) {
      frequencies[i + 1]--;
      deletions++;

      if (frequencies[i + 1] === 0) {
        frequencies.splice(i + 1, 1);
        i = 0;
      }
    }
  }

  return deletions;
}

module.exports = minDeletions;