const maximalNetworkRank = require('./maximalNetworkRank');

describe('1615. Maximal Network Rank', () => {

  it('should return the maximal network rank of the entire infrastructure', () => {
    expect(maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]])).toBe(4);
    expect(maximalNetworkRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]])).toBe(5);
    expect(maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]])).toBe(5);
  });

});