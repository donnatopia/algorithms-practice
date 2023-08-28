const checkStraightLine = require('./checkStraightLine.js');

xdescribe('1232. Check If It is a Straight Line', () => {

  it('should return true if coordinates produce a straight line', () => {
    expect(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])).toBe(true);
  });

  it('should return false if coordinates do not produce a straight line', () => {
    expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])).toBe(false);
    expect(checkStraightLine([[0,0],[0,5],[5,0],[1337,0],[0,1337]])).toBe(false);
    expect(checkStraightLine([[0,0],[0,5],[5,5],[5,0]])).toBe(false);
  });

  it('should return true for horizontal and vertical lines', () => {
    expect(checkStraightLine([[0,0],[0,1],[0,-1]])).toBe(true);
    expect(checkStraightLine([[4,8],[-2,8],[1,8],[8,8],[-5,8],[0,8],[7,8],[5,8]])).toBe(true);
  })
});