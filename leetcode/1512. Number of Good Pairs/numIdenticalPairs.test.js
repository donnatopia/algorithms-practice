const numIdenticalPairs = require('./numIdenticalPairs');

xdescribe('1512. Number of Good Pairs', () => {

  it('should return the number of good pairs', () => {
    expect(numIdenticalPairs([1,2,3,1,1,3])).toBe(4);
    expect(numIdenticalPairs([1,1,1,1])).toBe(6);
    expect(numIdenticalPairs([1,2,3])).toBe(0);
  });

});