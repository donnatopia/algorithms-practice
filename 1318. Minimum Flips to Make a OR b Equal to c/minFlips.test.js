const minFlips = require('./minFlips.js');

describe('1318. Minimum Flips to make a OR b Equal to c', () => {

  it('should find the minimum flips to make a OR b equal to c', () => {
    expect(minFlips(2, 6, 5)).toBe(3);
    expect(minFlips(4, 2, 7)).toBe(1);
    expect(minFlips(1, 2, 3)).toBe(0);
  });

});