const findCircleNum = require('./findCircleNum.js');

xdescribe('547. Number of Provinces', () => {

  it('should return the number of cities if no connections are found', () => {
    expect(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])).toBe(3);
  });

  it('should return 1 province for all connections', () => {
    expect(findCircleNum([[1,1,1],[1,1,1],[1,1,1]])).toBe(1);
  })

  it('should return the number of provinces if there are connections found', () => {
    expect(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])).toBe(2);
    expect(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]])).toBe(1);

    const isConnected = [[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]]

    expect(findCircleNum(isConnected)).toBe(3);
  });

});