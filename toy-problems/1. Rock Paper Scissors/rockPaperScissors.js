/**
 * @param {number} n
 * @return {string[]}
 */

const rockPaperScissors = (rounds) => {
  if (rounds <= 0) return [];
  if (rounds === 1) return ['R', 'P', 'S'];

  let combos = [];
  ['R', 'P', 'S'].forEach((round) => {
    let remainingRounds = rockPaperScissors(rounds - 1);
    remainingRounds.forEach((remainingRound) => {
      combos.push(round + remainingRound);
    })
  })

  return combos;
}

module.exports = rockPaperScissors;
