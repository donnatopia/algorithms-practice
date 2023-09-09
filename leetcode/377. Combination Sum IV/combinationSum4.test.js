const combinationSum4 = require('./combinationSum4');

xdescribe('377. Combination Sum IV', () => {

  it('should return the number of possible combinations that add up to target', () => {
    expect(combinationSum4([1,2,3], 4)).toBe(7);
    expect(combinationSum4([3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 10)).toBe(9);
  });

  it('should work even if nums is unsorted', () => {
    expect(combinationSum4([3,1,2,4], 4)).toBe(8);
  })

  it('should return 0 if there are no possible combinations of nums to add up to the target', () => {
    expect(combinationSum4([9], 3)).toBe(0);
  })

});