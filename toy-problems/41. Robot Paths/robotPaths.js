/* ===================
  Board Class
======================= */

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

/* ===================
  Robot Paths Function
======================= */

/**
 * @param {number} n
 * @return {number}
 */

const robotPaths = (n) => {
  let board = makeBoard(n);
  let paths = 0;

  function isValid(i, j) {
    const isInRange = i >= 0 && i < n && j >= 0 && j < n;
    if (isInRange) {
      return !board.hasBeenVisited(i, j);
    } else {
      return false;
    }
  }

  function traverse(i, j) {
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }

    board.togglePiece(i, j);

    if (isValid(i - 1, j)) traverse(i - 1, j);
    if (isValid(i + 1, j)) traverse(i + 1, j);
    if (isValid(i, j - 1)) traverse(i, j - 1);
    if (isValid(i, j + 1)) traverse(i, j + 1);

    board.togglePiece(i, j)
  }

  traverse(0, 0);

  return paths;
}

module.exports = robotPaths;
