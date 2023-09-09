const combinationSum4 = require('./combinationSum4');

xdescribe('377. Combination Sum IV', () => {

  it('should return the number of possible combinations that add up to target', () => {
    expect(combinationSum4([1,2,3], 4)).toBe(7);
    expect(combinationSum4([9], 3)).toBe(0)
  });

});