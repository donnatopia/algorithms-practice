const quickSort = require('./quickSort');

xdescribe('5. Quick Sort', () => {

  it('should return a sorted array', () => {
    expect(quickSort([10, 80, 30, 40, 50, 70])).toStrictEqual([10, 30, 40, 50, 70, 80]);
    expect(quickSort([9, 6, 3, 7, 2, 12, 5, 1])).toStrictEqual([1, 2, 3, 5, 6, 7, 9, 12]);
  });

  it('should return an empty array for empty array', () => {
    expect(quickSort([])).toStrictEqual([]);
  });

  it('should return the same array if there is only one value in the array', () => {
    expect(quickSort([2])).toStrictEqual([2]);
  })

  it('should return the same array if all values are duplicates', () => {
    expect(quickSort([1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1]);
  })

  it('should handle negative and zeroes in the array', () => {
    expect(quickSort([-3, -4, -1, -2, 0, 2])).toStrictEqual([-4, -3, -2, -1, 0, 2])
  })

});