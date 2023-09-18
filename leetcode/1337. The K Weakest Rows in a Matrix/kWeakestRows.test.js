const kWeakestRows = require('./kWeakestRows');

xdescribe('1337. The K Weakest Rows in a Matrix', () => {

  it('should return the indices of the k weakest rows in the matrix ordered from weakest to strongest', () => {
    expect(kWeakestRows([[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]], 3)).toStrictEqual([2,0,3]);
    expect(kWeakestRows([[1,0,0,0], [1,1,1,1], [1,0,0,0], [1,0,0,0]], 2)).toStrictEqual([0, 2]);
  });

});