/**
 * @param {string[]} deck
 * @return {string[]}
 */

const shuffleDeck = (deck) => {
  let shuffled = {};
  for (let i = 0; i < deck.length; i++) {
    let isPlaced = false;
    while (!isPlaced) {
      let random = Math.floor(Math.random() * (52 + 1));
      if (!shuffled[random]) {
        shuffled[random] = deck[i];
        isPlaced = true;
      }
    }
  }
  return Object.values(shuffled);
}

module.exports = shuffleDeck;
