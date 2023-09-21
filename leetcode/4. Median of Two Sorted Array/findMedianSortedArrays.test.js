const findMedianSortedArrays = require('./findMedianSortedArray');

xdescribe('4. Median of Two Sorted Arrays', () => {

  it('should return the median of the two sorted array', () => {
    expect(findMedianSortedArrays([1,3], [2])).toBe(2);
    expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
  });

});