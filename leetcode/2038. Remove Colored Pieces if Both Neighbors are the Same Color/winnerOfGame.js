/**
 * @param {string} colors
 * @return {boolean}
 */

const winnerOfGame = (colors) => {
  let a = 1;
  let b = 1;
  let currentPlayerIsA = true;

  const playerLosesRound = () => {
    let i = currentPlayerIsA ? a : b;
    let letter = currentPlayerIsA ? "A" : "B";

    while (i < colors.length) {
      if (colors[i] === letter && colors[i - 1] === letter && colors[i + 1] === letter) {
        currentPlayerIsA ? a++ : b++;
        return false;
      }
      currentPlayerIsA ? a++ : b++;
      i++;
    }

    return true;
  }

  while (a < colors.length && b < colors.length) {
    if (currentPlayerIsA) {
      if (playerLosesRound()) return false;
      currentPlayerIsA = false;
    } else {
      if (playerLosesRound()) return true;
      currentPlayerIsA = true;
    }
  }

  return a === colors.length ? false : true;
}

module.exports = winnerOfGame;