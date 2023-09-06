/**
 * @param {string} mapStr
 * @return {number}
 */

const islandCount = (mapStr) => {
  // create matrix
  let matrix = [];
  let rows = mapStr.split('\n');

  for (let i = 0; i < rows.length; i++) {
    let row = [];
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j] === '.') row.push(0);
      else if (rows[i][j] === '0') row.push(1);
    }
    matrix.push(row);
  }

  let counter = 0;

  // define dfs to mark off adjacent land masses
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) return;

    if (matrix[i][j] === 1) {
      matrix[i][j] = 0;
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
    }
  }

  // iterate through the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        counter++;
        dfs(row, col);
      }
    }
  }

  return counter;
}

module.exports = islandCount;
