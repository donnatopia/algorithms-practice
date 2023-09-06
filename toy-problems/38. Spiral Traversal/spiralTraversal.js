/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralTraversal = (matrix) => {
  let result = [];

  let firstRow = 0;
  let lastCol = matrix[0] ? matrix[0].length - 1 : 0;
  let lastRow = matrix.length - 1;
  let firstCol = 0;

  while (firstRow <= lastRow && firstCol <= lastCol) {

    for (let i = firstCol; i <= lastCol; i++) {
      result.push(matrix[firstRow][i]);
    }

    firstRow++;

    for (let i = firstRow; i <= lastRow; i++) {
      result.push(matrix[i][lastCol]);
    }

    lastCol--;

    if (firstRow <= lastRow) {
      for (let i = lastCol; i >= firstCol; i--) {
        result.push(matrix[lastRow][i]);
      }
      lastRow--;
    }

    if (firstCol <= lastCol) {
      for (let i = lastRow; i >= firstRow; i--) {
        result.push(matrix[i][firstCol]);
      }
      firstCol++;
    }
  }

  return result;
}

module.exports = spiralTraversal;
