/**
 * @param {string} colors
 * @return {boolean}
 */

const winnerOfGame = (colors) => {
  let validAMoves = 0;
  let validBMoves = 0;

  let i = 0;

  while (i < colors.length) {
    let letter = colors[i];
    let count = 0;

    while (i < colors.length && colors[i] === letter) {
      count++;
      i++;
    }

    if (letter === 'A') {
      validAMoves += Math.max(count - 2, 0);
    } else {
      validBMoves += Math.max(count - 2, 0);
    }
  }

  return validAMoves > validBMoves;
}

module.exports = winnerOfGame;