/**
 * @param {string[]} deck
 * @return {string[]}
 */

const shuffleDeck = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    let random = Math.floor(Math.random() * deck.length);
    let card = deck[i];
    let randomCard = deck[random];
    deck[i] = randomCard;
    deck[random] = card;
  }
  return deck;
}

module.exports = shuffleDeck;
