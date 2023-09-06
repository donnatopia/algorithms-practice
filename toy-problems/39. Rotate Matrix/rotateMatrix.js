/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const rotateMatrix = (matrix) => {
  let rotated = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let rotatedRow = [];
    for (let row = matrix.length - 1; row >= 0; row--) {
      rotatedRow.push(matrix[row][col]);
    }
    rotated.push(rotatedRow);
  }
  return rotated;
}

module.exports = rotateMatrix;
