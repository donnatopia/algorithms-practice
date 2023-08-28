const updateMatrix = require('./updateMatrix');

xdescribe('542. 01 Matrix', () => {

  it('should return the distance of the nearest 0 for each cell', () => {
    expect(updateMatrix([[0,0,0],[0,1,0],[0,0,0]])).toStrictEqual([[0,0,0],[0,1,0],[0,0,0]]);
    // expect(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])).toStrictEqual([[0,0,0],[0,1,0],[1,2,1]]);
  });

});