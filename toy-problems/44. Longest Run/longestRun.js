/**
 * @param {string} str
 * @return {[number, number]}
 */

const longestRun = (str) => {
  if (str.length === 0) return null;

  let start = 0;
  let end = 0;
  let i = 0;

  while (i < str.length) {
    let j = i;

    while (j + 1 < str.length && str[j + 1] === str[i]) {
      j++;
    }

    if ((j - i) > (end - start)) {
      end = j;
      start = i;
    }

    i = j + 1;
  }

  return [start, end];
}

module.exports = longestRun;
