const permutate = require('./permutate.js');

describe('46. Permutations', () => {

  it('should return all the possible permutations', () => {
    expect(permutate([1, 2, 3])).toStrictEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    expect(permutate([0, 1])).toStrictEqual([[0,1],[1,0]]);
    expect(permutate([1])).toStrictEqual([[1]]);
  });

});