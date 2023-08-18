/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

module.exports = (mat) => {
  const numOfRows = mat.length;
  const numOfCols = mat[0].length;

  let distances = Array(numOfRows);
  for (let row = 0; row < numOfRows; row++) {
    distances[row] = Array(numOfCols).fill(-1);
  }

  const getDistance = (row, col) => {
    const rowOutOfRange = row < -1 || row > numOfRows - 1;
    const colOutOfRange = col < -1 || col > numOfCols - 1;

    if (rowOutOfRange || colOutOfRange) {
      return Number.POSITIVE_INFINITY;
    }

    if (distances[row][col] !== -1) {
      return distances[row][col];
    }

    if (mat[row][col] === 0) {
      distances[row][col] = 0;
      return 0;
    }

    const left = 1 + getDistance(row, col - 1);
    const right = 1 + getDistance(row, col + 1);
    const above = 1 + getDistance(row - 1, col);
    const below = 1 + getDistance(row + 1, col);

    const distance = Math.min(left, right, above, below);
    distances[row][col] = distance;
    return distance;
  }

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfCols; j++) {
      getDistance(i, j);
    }
  }

  return distances;
}