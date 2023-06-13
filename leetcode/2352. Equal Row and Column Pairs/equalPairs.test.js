const equalPairs = require('./equalPairs.js');

describe('2352. Equal Row and Column Pairs', () => {

  it('should produce an equal row and column pair', () => {
    expect(equalPairs([[3,2,1],[1,7,6],[2,7,7]])).toBe(1);
    expect(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])).toBe(3);
    expect(equalPairs([[11,1],[1,11]])).toBe(2);
  });

});