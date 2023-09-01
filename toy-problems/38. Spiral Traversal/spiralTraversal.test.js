const spiralTraversal = require('./spiralTraversal');

xdescribe('38. Spiral Traversal', () => {

  it('should return an array that prints out every value in spiral form from 2D array', () => {
    expect(spiralTraversal([[1,2,3],[4,5,6], [7,8,9]])).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

});