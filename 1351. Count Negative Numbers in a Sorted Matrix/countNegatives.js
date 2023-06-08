/**
 * @param {number[][]} grid
 * @return {number}
 */

module.exports = (grid) => {
  let count = 0;

  for (var m = 0; m < grid.length; m++) {
    for (var n = (grid[m].length - 1); n >= 0; n--) {
      if (grid[m][n] < 0) {
        count++;
      } else {
        break;
      }
    }
  }

  return count;
}