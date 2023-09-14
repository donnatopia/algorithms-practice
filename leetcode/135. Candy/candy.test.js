const candy = require('./candy');

xdescribe('135. Candy', () => {

  it('should return the minimum number of candies to distribute the candies to the children', () => {
    expect(candy([1,0,2])).toBe(5); // [2, 1, 2] => 5
    expect(candy([1,2,2])).toBe(4); // [1, 2, 1] => 4
    expect(candy([1,2,87,87,87,2,1])).toBe(13); // [1, 2, 3, 1, 3, 2, 1] => 13
    expect(candy([1,3,2,2,1])).toBe(7);
  });

});