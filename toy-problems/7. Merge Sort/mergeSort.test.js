const mergeSort = require('./mergeSort');

xdescribe('7. Merge Sort', () => {

  it('should sort the provided array', () => {
    expect(mergeSort([4,7,4,3,9,1,2])).toStrictEqual([1, 2, 3, 4, 4, 7, 9]);
  });

  // should mutate the original array
  // should have a time complexity of O(n log(n))
  // should have a constant space complexity
});