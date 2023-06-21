const minCost = require('./minCost.js');

describe('2448. Minimum Cost to Make Array Equal', () => {

  it('should find the minimum cost to make array equal', () => {
    expect(minCost([1,3,5,2], [2,3,1,14])).toBe(8);
    expect(minCost([2,2,2,2,2], [4,2,8,1,3])).toBe(0);
  });

});