const combine = require('./combine.js');

xdescribe('77. Combinations', () => {

  it('should return all possible combinations of k numbers chosen from the range [1, n]', () => {
    expect(combine(4, 2)).toStrictEqual([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
    expect(combine(1, 1)).toStrictEqual([[1]]);
  });

});