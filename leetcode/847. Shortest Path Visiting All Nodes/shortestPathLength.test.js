const shortestPathLength = require('./shortestPathLength');

xdescribe('847. Shortest Path Visiting All Nodes', () => {

  it('should return the length of the shortest path that visits every node', () => {
    expect(shortestPathLength([[1,2,3],[0],[0],[0]])).toBe(4);
    expect(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])).toBe(4);
  });

});