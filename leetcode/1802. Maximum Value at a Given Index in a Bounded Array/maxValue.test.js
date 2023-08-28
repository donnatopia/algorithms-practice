const maxValue = require('./maxValue.js');

xdescribe('1802. Maximum Value at a Given Index in a Bounded Array', () => {

  it('should give the maximum value at an index for a bounded array', () => {
    expect(maxValue(4, 2, 6)).toBe(2);
    expect(maxValue(6, 1, 10)).toBe(3);
    expect(maxValue(4, 0, 4)).toBe(1);
    expect(maxValue(9, 0, 90924720)).toBe(10102750);
    expect(maxValue(6, 0, 27)).toBe(7);
  });

});