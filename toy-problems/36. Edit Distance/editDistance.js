/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */

const editDistance = (str1, str2) => {
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;

  let matrix = [];

  for (let row = 0; row <= str2.length; row++) {
    matrix[row] = [row];
  }

  for (let col = 0; col <= str1.length; col++) {
    matrix[0][col] = col;
  }

  for (let row = 1; row <= str2.length; row++) {
    for (let col = 1; col <= str1.length; col++) {
      if (str1[col - 1] === str2[row - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1];
      } else {
        matrix[row][col] = Math.min(matrix[row - 1][col - 1], matrix[row - 1][col], matrix[row][col - 1]) + 1;
      }
    }
  }

  return matrix[str2.length][str1.length];
}

module.exports = editDistance;
