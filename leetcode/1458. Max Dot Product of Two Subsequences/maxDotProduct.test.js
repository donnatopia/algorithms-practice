const maxDotProduct = require('./maxDotProduct');

xdescribe('1458. Max Dot Product of Two Subsequences', () => {

  it('should return the maximum dot product between non-empty subsequences of nums1 and nums2 with same length', () => {
    expect(maxDotProduct([2,1,-2,5], [3,0,-6])).toBe(18);
    expect(maxDotProduct([3,-2], [2,-6,7])).toBe(21);
    expect(maxDotProduct([-1,-1], [1,1])).toBe(-1);
  });

});