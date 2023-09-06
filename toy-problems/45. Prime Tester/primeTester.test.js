const primeTester = require('./primeTester');

xdescribe('45. Prime Tester', () => {

  it('should return true for prime numbers', () => {
    expect(primeTester(2)).toBe(true);
    expect(primeTester(15485867)).toBe(true);
    expect(primeTester(2971215073)).toBe(true);
    expect(primeTester(70368760954879)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(primeTester(1)).toBe(false);
    expect(primeTester(70368760954878)).toBe(false);
  })

});