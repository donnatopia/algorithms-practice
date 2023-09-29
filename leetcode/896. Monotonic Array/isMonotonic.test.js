const isMonotonic = require('./isMonotonic');

xdescribe('896. Monotonic Array', () => {

  it('should return true if the given array is monotonic', () => {
    expect(isMonotonic([1,2,2,3])).toBe(true);
    expect(isMonotonic([6,5,4,4])).toBe(true);
  });

  it('should return false if the given array is NOT monotonic', () => {
    expect(isMonotonic([1,3,2])).toBe(false);
  })

});