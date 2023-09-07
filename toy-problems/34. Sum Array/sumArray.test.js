const sumArray = require('./sumArray');

xdescribe('34. Sum Array', () => {

  it('should return the greatest contiguous sum of numbers in it', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([1, 2, 3, -4])).toBe(6);
    expect(sumArray([1, 2, 3, -4, 5])).toBe(7);
    expect(sumArray([4, -1, 5])).toBe(8);
    expect(sumArray([10, -11, 11])).toBe(11);
  });

});