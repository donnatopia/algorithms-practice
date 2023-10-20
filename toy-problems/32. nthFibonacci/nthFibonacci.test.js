const nthFibonacci = require('./nthFibonacci');

xdescribe('32. Nth Fibonacci', () => {

  it('should return 1 for input 2', () => {
    expect(nthFibonacci(2)).toBe(1);
  });

  it('should return 2 for input 3', () => {
    expect(nthFibonacci(3)).toBe(2);
  });

  it('should return 4 for input 4', () => {
    expect(nthFibonacci(4)).toBe(3);
  });

  it('should handle larger input values', () => {
    expect(nthFibonacci(5)).toBe(5);
    expect(nthFibonacci(6)).toBe(8);
    expect(nthFibonacci(10)).toBe(55);
  });

  it('should return 0 for input 0', () => {
    expect(nthFibonacci(0)).toBe(0);
  });

  it('should handle negative input gracefully', () => {
    expect(nthFibonacci(-1)).toBe(null);
    expect(nthFibonacci(-5)).toBe(null);
  });

});