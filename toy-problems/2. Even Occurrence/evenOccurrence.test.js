const evenOccurrence = require('./evenOccurrence');

xdescribe('2. Even Occcurrence', () => {

  it('should return the first even occurrence of an array with numbers', () => {
    expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(4);
  });

  it('should return the first even occurrence of an array with strings', () => {
    expect(evenOccurrence(['cat', 'dog', 'dig', 'cat'])).toBe('cat');
  });

  it('should return the first even occurrence of a mixed array', () => {
    expect(evenOccurrence(['meow', 1, 1, 'meow', 'meow', 'meow'])).toBe('meow')
  });

  it('should return the first even occurrence in an array with multiple even occurrences', () => {
    expect(evenOccurrence(['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow'])).toBe('doublerainbow');
  })

  it('should return null if no element has an even occurrence', () => {
    expect(evenOccurrence([1, 2, 3, 4])).toBe(null);
  });

});