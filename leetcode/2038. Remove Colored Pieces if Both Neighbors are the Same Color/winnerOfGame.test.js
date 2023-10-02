const winnerOfGame = require('./winnerOfGame');

xdescribe('2038. Remove Colored Pieces if Both Neighbors are the Same Color', () => {

  it('should return true if Alice wins', () => {
    expect(winnerOfGame("AAABABB")).toBe(true);
  });

  it('should return false if Bob wins', () => {
    expect(winnerOfGame("AA")).toBe(false);
    expect(winnerOfGame("ABBBBBBBAAA")).toBe(false);
  })

});