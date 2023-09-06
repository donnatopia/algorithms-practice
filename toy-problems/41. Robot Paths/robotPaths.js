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

}

module.exports = robotPaths;
