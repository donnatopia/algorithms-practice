const toFraction = require('./fractionConverter');

xdescribe('33. Fraction Converter', () => {

  it('should return a string that represents its simplified fraction for values less than 1', () => {
    expect(toFraction(0.25)).toBe('1/4');
    expect(toFraction(0.5)).toBe('1/2');
    expect(toFraction(0.88)).toBe('22/25');
  });

  it('should return whole numbers', () => {
    expect(toFraction(1.0)).toBe('1/1');
    expect(toFraction(3.0)).toBe('3/1');
    expect(toFraction(82.0)).toBe('82/1');
  });

  it('should return improper fractions', () => {
    expect(toFraction(1.5)).toBe('3/2');
    expect(toFraction(1.75)).toBe('7/4');
    expect(toFraction(2.5)).toBe('5/2');
  });

  it('should return 0/1 for 0', () => {
    expect(toFraction(0)).toBe('0/1');
  })

  it('should work for negative numbers', () => {
    expect(toFraction(-1.75)).toBe('-7/4');
  })

});