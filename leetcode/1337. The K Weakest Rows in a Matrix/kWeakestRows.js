/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

const kWeakestRows = (mat, k) => {
  let strengths = mat.map((row, i) => [row.reduce((a, b) => a + b, 0), i])
  strengths.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  return strengths.slice(0, k).map(([_, i]) => i);
}

module.exports = kWeakestRows;