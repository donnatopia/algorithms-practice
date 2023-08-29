const insertionSort = require('./insertionSort');

xdescribe('6. Insertion Sort', () => {

  it('should sort the provided array', () => {
    expect(insertionSort([4, 7, 4, 3, 9, 1, 2])).toStrictEqual([1, 2, 3, 4, 4, 7, 9]);
    expect(insertionSort([9, 2, 3, 7, 1, 4])).toStrictEqual([1, 2, 3, 4, 7, 9]);
    expect(insertionSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  it('should handle empty arrays', () => {
    expect(insertionSort([])).toStrictEqual([]);
  })

  it('should handle arrays with only 1 element', () => {
    expect(insertionSort([1])).toStrictEqual([1]);
  })

  it('should mutate the original array', () => {
    let original = [9, 2, 3, 7, 1, 4];
    let result = insertionSort(original);

    expect(result).toStrictEqual([1, 2, 3, 4, 7, 9]);
    expect(original).toStrictEqual([1, 2, 3, 4, 7, 9]);
  });
});