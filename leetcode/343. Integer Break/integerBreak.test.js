const integerBreak = require('./integerBreak');

xdescribe('343. Integer Break', () => {

  it('should return the maximum product', () => {
    expect(integerBreak(2)).toBe(1);
    expect(integerBreak(10)).toBe(36);
  });

});