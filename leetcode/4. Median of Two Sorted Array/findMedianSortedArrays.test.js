const findMedianSortedArray = require('./findMedianSortedArray');

xdescribe('4. Median of Two Sorted Arrays', () => {

  it('should return the median of the two sorted array', () => {
    expect(findMedianSortedArray([1,3], [2])).toBe(2);
    expect(findMedianSortedArray([1,2], [3,4])).toBe(2.5);
  });

});