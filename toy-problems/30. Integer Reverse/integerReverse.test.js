const reverseInteger = require('./integerReverse');

xdescribe('30. Integer Reverse', () => {

  it('should return the reverse of the input integer', () => {
    expect(reverseInteger(1234)).toBe(4321);
    expect(reverseInteger(100)).toBe(1);
    expect(reverseInteger(150)).toBe(51);
    expect(reverseInteger(2342617432)).toBe(2347162432);
    expect(reverseInteger(2836591)).toBe(1956382);
    expect(reverseInteger(58648550)).toBe(5584685);
    expect(reverseInteger(5748104710)).toBe(174018475);
    expect(reverseInteger(77477477)).toBe(77477477);
    expect(reverseInteger(1)).toBe(1);
    expect(reverseInteger(10)).toBe(1);
    expect(reverseInteger(0)).toBe(0);
  });

});