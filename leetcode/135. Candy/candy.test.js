const candy = require('./candy');

xdescribe('135. Candy', () => {

  it('should return teh minimum number of candies to distribute the candies to the children', () => {
    expect(candy([1,0,2])).toBe(5);
    expect(candy([1,2,2])).toBe(4);
  });

});