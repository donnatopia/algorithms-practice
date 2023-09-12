const shuffleDeck = require('./shuffleDeck');

xdescribe('8. Shuffle Deck', () => {

  let orderedDeck = function() {
    var suits = [ '♥', '♣', '♠', '♦' ];
    var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    var deck = [];

    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push(value + suit);
      });
    });

    return deck;
  };

  it('should be return an array with every card in the deck', () => {
    let originalDeck = orderedDeck();
    let shuffledDeck = shuffleDeck(originalDeck);

    expect(shuffledDeck).toEqual(expect.arrayContaining(originalDeck));
    expect(shuffledDeck.length).toBe(originalDeck.length);
  });

  it('should not return the original deck', () => {
    let originalDeck = orderedDeck();
    let shuffledDeck = shuffleDeck(originalDeck);

    expect(shuffledDeck).not.toStrictEqual(originalDeck);
  });

  it('should not return the deck in the same order twice', () => {
    let originalDeck = orderedDeck();
    let firstShuffledDeck = shuffleDeck(originalDeck);

    expect(firstShuffledDeck).toEqual(expect.arrayContaining(originalDeck));
    expect(firstShuffledDeck.length).toBe(originalDeck.length);

    let secondShuffledDeck = shuffleDeck(firstShuffledDeck);
    expect(secondShuffledDeck).toEqual(expect.arrayContaining(originalDeck));
    expect(secondShuffledDeck.length).toBe(originalDeck.length);
  })

});