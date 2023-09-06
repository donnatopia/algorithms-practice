const spiralTraversal = require('./spiralTraversal');

xdescribe('38. Spiral Traversal', () => {
  it('should return an array that prints out every value in spiral form from a 3x3 2D array', () => {
    expect(spiralTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('should return an array that prints out every value in spiral form from a 4x4 2D array', () => {
    expect(spiralTraversal([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toStrictEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it('should return an array that prints out every value in spiral form from a 2x2 2D array', () => {
    expect(spiralTraversal([[1, 2], [3, 4]])).toStrictEqual([1, 2, 4, 3]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(spiralTraversal([])).toStrictEqual([]);
  });

  it('should return an array containing a single element for a 1x1 input array', () => {
    expect(spiralTraversal([[42]])).toStrictEqual([42]);
  });

  it('should return an empty array for an array with multiple empty subarrays', () => {
    expect(spiralTraversal([[], [], []])).toStrictEqual([]);
  });

  it('should return an array with values in spiral form from a 5x3 2D array', () => {
    expect(spiralTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]])).toStrictEqual([1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5, 8, 11]);
  });

  it('should return an array with values in spiral form from a 1x5 2D array', () => {
    expect(spiralTraversal([[1, 2, 3, 4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array with values in spiral form from a large 6x6 2D array', () => {
    expect(spiralTraversal([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
  });
});