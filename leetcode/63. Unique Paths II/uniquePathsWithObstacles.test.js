const uniquePathsWithObstacles = require('./uniquePathsWithObstacles');

xdescribe('63. Unique Paths II', () => {

  it('should return the number of possible paths that the robot can take to reach the bottom-right corner', () => {
    expect(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])).toBe(2);
    expect(uniquePathsWithObstacles([[0,1],[0,0]])).toBe(1);
  });

});