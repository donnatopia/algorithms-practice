const commonCharacters = require('./commonCharacters');

xdescribe('23. Common Characters', () => {

  it('should return a string containing characters found in both strings in the order they appeared in \'a\'', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toBe('aeiou');
  });

  it('should return the common characters in the order they appear', () => {
    expect(commonCharacters('zyx', 'xzy')).toBe('zyx');
  });

  it('should return "" if the first string is ""', () => {
    expect(commonCharacters('', 'abc')).toBe('');
  });

  it('should return the original string for repeated versions of a characters', () => {
    expect(commonCharacters('abc', 'abc')).toBe('abc');
  });

  it('should not contain duplicates in the result', () => {
    expect(commonCharacters('aab', 'aabc')).toBe('ab');
  })

  it('should return an empty string when comparing two empty strings', () => {
    expect(commonCharacters('', '')).toBe('');
  });

  it('should return common characters betwen more than two strings', () => {
    expect(commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa')).toBe('y');
  })

});