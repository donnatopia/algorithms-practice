const firstNonRepeatedCharacter = require('./nonrepeatedCharacter');

xdescribe('9. Nonrepeated Character', () => {

  it('should return null for empty string', () => {
    expect(firstNonRepeatedCharacter('')).toBeNull();
  });

  it('should return null for strings that every character is repeated', () => {
    expect(firstNonRepeatedCharacter('AABBCC')).toBeNull();
  })

  it('should return the first instance of a nonrepeated character', () => {
    expect(firstNonRepeatedCharacter('ABA')).toBe('B');
    expect(firstNonRepeatedCharacter('AACBDB')).toBe('C');
    expect(firstNonRepeatedCharacter('AABCAC')).toBe('B');
    expect(firstNonRepeatedCharacter('ABCA')).toBe('B');
    expect(firstNonRepeatedCharacter('AAAACX')).toBe('C');
    expect(firstNonRepeatedCharacter('AABCABD')).toBe('C');
  });

});