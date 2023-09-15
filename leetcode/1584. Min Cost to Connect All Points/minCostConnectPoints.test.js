const minCostConnectPoints = require('./minCostConnectPoints');

xdescribe('1584. Min Cost to Connect All Points', () => {

  it('should return the minimum cost to make all points connected', () => {
    expect(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])).toBe(20);
    expect(minCostConnectPoints([[3,12],[-2,5],[-4,1]])).toBe(18);
  });

  it('should not have cyclic connections', () => {
    expect(minCostConnectPoints([[0,0],[1,1],[1,0],[-1,1]])).toBe(4);
  })

});