/**
 * @param {number[]} arr
 * @return {boolean}
 */

module.exports = (arr) => {
  const sorted = arr.sort((a, b) => b - a);
  const progression = sorted[0] - sorted[1];

  for (let i = 2; i < sorted.length; i++) {
    let difference = sorted[i - 1] - sorted[i];
    if (progression !== difference) {
      return false;
    }
  }

  return true;
}