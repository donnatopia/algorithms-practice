const rotateMatrix = require('./rotateMatrix');

xdescribe('39. Rotate Matrix', () => {

  it('should rotate 1x1 matrix', () => {
    expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
  });

  it('should rotate 2x2 matrix', () => {
    expect(rotateMatrix([[1, 2], [3, 4]])).toStrictEqual([[3, 1], [4, 2]]);
  });

  it('should rotate a 3x3 matrix', () => {
    expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });

  it('should rotate 4x4 matrix', () => {
    expect(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,'A','B','C'],['D','E','F','G']])).toStrictEqual([['D',9,5,1],['E','A',6,2],['F','B',7,3],['G','C',8,4]]);
  });

  it('should rotate a 5x5 matrix', () => {
    expect(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 'A'], ['B', 'C', 'D', 'E', 'F'], ['G', 'H', 'I', 'J', 'K'], ['L', 'M', 'N', 'O', 'P']])).toStrictEqual([['L', 'G', 'B', 6, 1], ['M', 'H', 'C', 7, 2], ['N', 'I', 'D', 8, 3], ['O', 'J', 'E', 9, 4], ['P', 'K', 'F', 'A', 5]]);
  });

  it('should rotate a 6x6 matrix', () => {
    expect(rotateMatrix([[1, 2, 3, 4, 5, 6], [7, 8, 9, 'A', 'B', 'C'], ['D', 'E', 'F', 'G', 'H', 'I'], ['J', 'K', 'L', 'M', 'N', 'O'], ['P', 'Q', 'R', 'S', 'T', 'U'], ['V', 'W', 'X', 'Y', 'Z', '0']])).toStrictEqual([['V', 'P', 'J', 'D', 7, 1], ['W', 'Q', 'K', 'E', 8, 2], ['X', 'R', 'L', 'F', 9, 3], ['Y', 'S', 'M', 'G', 'A', 4], ['Z', 'T', 'N', 'H', 'B', 5], ['0', 'U', 'O', 'I', 'C', 6]]);
  });

});