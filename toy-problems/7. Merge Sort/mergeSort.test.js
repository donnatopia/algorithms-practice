const mergeSort = require('./mergeSort');

describe('7. Merge Sort', () => {

  it('should sort the provided array', () => {
    expect(mergeSort([4, 7, 4, 3, 9, 1, 2])).toStrictEqual([1, 2, 3, 4, 4, 7, 9]);
    expect(mergeSort([9, 2, 3, 7, 1, 4])).toStrictEqual([1, 2, 3, 4, 7, 9]);
    expect(mergeSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays', () => {
    expect(mergeSort([])).toStrictEqual([]);
  })

  it('should handle arrays with only 1 element', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
  })

  it('should not mutate the original array', () => {
    let original = [9, 2, 3, 7, 1, 4];
    let result = mergeSort(original);

    expect(result).toStrictEqual([1, 2, 3, 4, 7, 9]);
    expect(original).toStrictEqual([9, 2, 3, 7, 1, 4]);
  });
});