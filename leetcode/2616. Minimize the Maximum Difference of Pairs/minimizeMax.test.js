const minimizeMax = require('./minimizeMax');

describe('2616. Minimize the Maximum Difference of Pairs', () => {

  it('should return the minimum maximum difference among all p pairs', () => {
    expect(minimizeMax([10,1,2,7,1,3], 2)).toBe(1);
    expect(minimizeMax([4,2,1,2], 1)).toBe(0);
  });

  it('should return 0 for an empty set', () => {
    expect(minimizeMax([], 0)).toBe(0);
  });

  it('should return 0 when p = 0', () => {
    expect(minimizeMax([0,5,3,4], 0)).toBe(0);
  })

  it('should not use the same index in a pair', () => {
    expect(minimizeMax([3,4,2,3,2,1,2], 3)).toBe(1);
  })

});