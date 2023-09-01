const rotatedArraySearch = require('./rotatedArraySearch');

xdescribe('37. Rotated Array Search', () => {

  it('should return the index of the element if it is present in the array', () => {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)).toBe(5);
  });

  it('should return null if the element is not present in the array', () => {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)).toBe(null);
  })

});