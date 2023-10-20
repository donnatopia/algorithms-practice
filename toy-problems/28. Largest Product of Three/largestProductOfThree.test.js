const largestProductOfThree = require('./largestProductOfThree');

xdescribe('28. Largest Product of Three', () => {

  it('should find the largest product of three numbers from the input array', () => {
    expect(largestProductOfThree([2, 1, 3, 7])).toBe(42);
    expect(largestProductOfThree([1, 2, 3, 4, 5])).toBe(60);
});

it('should return null if the input array has less than three elements', () => {
    expect(largestProductOfThree([1, 2])).toBe(null);
    expect(largestProductOfThree([10])).toBe(null);
    expect(largestProductOfThree([])).toBe(null);
});

it('should handle negative numbers and zeros in the input array', () => {
    expect(largestProductOfThree([-1, -2, 3, 4])).toBe(8);
    expect(largestProductOfThree([-1, -2, -3, -4])).toBe(-6);
    expect(largestProductOfThree([-1, 0, 3, 4])).toBe(0);
    expect(largestProductOfThree([-10, -10, 1, 3, 2])).toBe(300);
    expect(largestProductOfThree([-1, -1, -3, 4])).toBe(12);
    expect(largestProductOfThree([0, 0, 0, 0])).toBe(0);
    expect(largestProductOfThree([5, 7, -3, 2, -1, 0])).toBe(70);
    expect(largestProductOfThree([0, 1, 2, 3])).toBe(6);
});

});