const quickSort = require('./quickSort');

xdescribe('5. Quick Sort', () => {

  it('should return a sorted array', () => {
    expect(quickSort([10, 80, 30, 40, 50, 70])).toStrictEqual([10, 30, 40, 50, 70, 80]);
    expect(quickSort([9, 6, 3, 7, 2, 12, 5, 1])).toStrictEqual([1, 2, 3, 5, 6, 7, 9, 12]);
  });

});