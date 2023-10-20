/**
 * @param {string} string
 * @return {string}
 */

const sudokuChecker = (string) => {
  let board = string.split('\n');

  board = board.map(row =>
    row.split('').map((digit) => Number(digit))
  );

  const invalid = (arr) => {
    return new Set(arr).size !== 9 || arr.reduce((acc, curr) => acc += curr, 0) !== 45;
  }

  // check rows
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    if (invalid(row)) return 'invalid';
  }

  // check columns
  for (let col = 0; col < board.length; col++) {
    let column = [];

    for (let row = 0; row < board.length; row++) {
      column.push(board[row][col]);
    }

    if (invalid(column)) return 'invalid';
  }

  // check boxes
  for (let col = 0; col < board.length; col += 3) {
    for (let row = 0; row < board.length; row += 3) {
      let row1 = (board[row].slice(col, col + 3));
      let row2 = (board[row + 1].slice(col, col + 3));
      let row3 = (board[row + 2].slice(col, col + 3));

      let box = row1.concat(row2, row3);
      if (invalid(box)) return 'invalid';
    }
  }

  return 'solved';
}

module.exports = sudokuChecker;
