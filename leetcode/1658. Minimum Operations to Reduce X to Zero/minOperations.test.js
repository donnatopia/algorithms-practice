const minOperations = require('./minOperations');

xdescribe('1658. Minimum Operations to Reduce X to Zero', () => {

  it('should return the minimum number of operations to reduce x to exactly 0', () => {
    expect(minOperations([1,1,4,2,3], 5)).toBe(2);
    expect(minOperations([3,2,20,1,1,3], 10)).toBe(5);
  });

  it('should return -1 if there are no operations to reduce x to 0', () => {
    expect(minOperations([5,6,7,8,9], 4)).toBe(-1)
  })

});