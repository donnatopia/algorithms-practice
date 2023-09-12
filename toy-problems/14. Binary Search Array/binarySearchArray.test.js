const binarySearch = require('./binarySearchArray');

xdescribe('14. Binary Search Array', () => {

  it('should return 0 for 5 in [5]', () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  it('should return null for 4 in [5]', () => {
    expect(binarySearch([5], 4)).toBeNull();
  });

  it('should return 0 for 1 in [1, 2, 3, 4, 5]', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it('should return 1 for 2 in [1, 2, 3, 4, 5]', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
  });

  it('should return 2 for 3 in [1, 2, 3, 4, 5]', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5]', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it('should return 4 for 5 in [1, 2, 3, 4, 5]', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5, 6]', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });

  it('should return 3 for 45 in [11, 22, 33, 45, 53, 62]', () => {
    expect(binarySearch([11, 22, 33, 45, 53, 62], 45)).toBe(3);
  });

  it('should return null for 55 in [11, 22, 33, 45, 53, 62]', () => {
    expect(binarySearch([11, 22, 33, 45, 53, 62], 55)).toBeNull();
  });

  it('should not use native indexOf method', () => {
    const sourceCode = binarySearch.toString();
    expect(sourceCode).not.toMatch(/indexOf/);
  });

  it('should not use native slice method', () => {
    const sourceCode = binarySearch.toString();
    expect(sourceCode).not.toMatch(/slice/);
  });

});