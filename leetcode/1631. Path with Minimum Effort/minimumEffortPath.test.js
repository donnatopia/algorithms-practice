const minimumEffortPath = require('./minimumEffortPath');

xdescribe('1631. Path with Minimum Effort', () => {

  it('should return teh minimum effort required to travel from the top-left cell to the bottom-right cell', () => {
    expect(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]])).toBe(2);
    expect(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]])).toBe(1);
    expect(minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]])).toBe(0);
  });

});