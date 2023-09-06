const rotateMatrix = require('./rotateMatrix');

xdescribe('39. Rotate Matrix', () => {

  it('should rotate 1x1 matrix', () => {
    expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
  });

  it('should rotate 2x2 matrix', () => {
    expect(rotateMatrix([[1, 2], [3, 4]])).toStrictEqual([[3, 1], [4, 2]]);
  })

  it('should rotate 4x4 matrix', () => {
    expect(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,'A','B','C'],['D','E','F','G']])).toStrictEqual([['D',9,5,1],['E','A',6,2],['F','B',7,3],['G','C',8,4]]);
  })

});