/**
 * @param {number[][]} grid
 * @return {number}
 */

module.exports = (grid) => {
  let counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let allElementsEqual = true;
      for (let i = 0; i < grid.length; i++) {
        if (grid[row][i] !== grid[i][col]) {
          allElementsEqual = false;
          break;
        }
      }
      if (allElementsEqual) {
        counter++;
      }
    }
  }

  return counter;
}