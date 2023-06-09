const nextGreatestLetter = require('./nextGreatestLetter.js');

describe('744. Find Smallest Letter Greater Than Target', () => {

  it('should return the smallest character that is lexigraphically greater than the target', () => {
    expect(nextGreatestLetter(["c","f","j"], "a")).toBe("c");
    expect(nextGreatestLetter(["c","f","j"], "c")).toBe("f");
  });

  it('should return the first character in letters if next greatest letter does not exist', () => {
    expect(nextGreatestLetter(["x","x","y","y"], "z")).toBe("x");
  });

});