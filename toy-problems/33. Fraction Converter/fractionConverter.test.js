const toFraction = require('./fractionConverter');

xdescribe('33. Fraction Converter', () => {

  it('should return a string that represents its simplified fraction', () => {
    expect(toFraction(0.5)).toBe('1/2');
    expect(toFraction(1.5)).toBe('3/2');
    expect(toFraction(3.0)).toBe('3/1');
    expect(toFraction(2.5)).toBe('5/2');
  });

});