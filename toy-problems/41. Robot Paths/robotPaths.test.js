const robotPaths = require('./robotPaths');

xdescribe('41. Robot Paths', () => {

  it('should correctly identify the number of unique paths for 1x1 grid', () => {
    expect(robotPaths(1)).toBe(1);
  });

  it('should correctly identify the number of unique paths for 2x2 grid', () => {
    expect(robotPaths(2)).toBe(2);
  });

  it('should correctly identify the number of unique paths for 3x3 grid', () => {
    expect(robotPaths(3)).toBe(12);
  });

  it('should correctly identify the number of unique paths for 4x4 grid', () => {
    expect(robotPaths(4)).toBe(184);
  });

  it('should correctly identify the number of unique paths for 5x5 grid', () => {
    expect(robotPaths(5)).toBe(8512);
  });

  it('should correctly identify the number of unique paths for 6x6 grid', () => {
    expect(robotPaths(6)).toBe(1262816);
  });

});