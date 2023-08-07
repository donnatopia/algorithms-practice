const searchMatrix = require('./searchMatrix');

describe('74. Search a 2D Matrix', () => {

  it('should return true if the target is in the matrix', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toBe(true);
  });

  it('should return false if the target is NOT in the matrix', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toBe(false);
  })

  // it should have a time complexity of O(log(m * n))

});