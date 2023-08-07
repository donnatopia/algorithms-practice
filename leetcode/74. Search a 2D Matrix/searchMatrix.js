/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

module.exports = (matrix, target) => {
  let currentRowIndex = 0;
  let left = 0;
  let right = matrix[currentRowIndex].length - 1;

  while (currentRowIndex < matrix.length) {
    let currentRow = matrix[currentRowIndex];
    if (target < currentRow[right]) {
      while (right >= left) {
        let midIndex = Math.floor((right + left) / 2);
        if (currentRow[midIndex] < target) {
          left = midIndex + 1;
        } else if (currentRow[midIndex] > target) {
          right = midIndex - 1;
        } else if (currentRow[midIndex] === target) {
          return true;
        }
      }
      return false;
    } else if (target === currentRow[right]) {
      return true;
    } else {
      currentRowIndex++;
    }
  }

  return false;
}