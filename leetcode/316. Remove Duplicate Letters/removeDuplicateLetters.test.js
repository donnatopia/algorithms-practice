const removeDuplicateLetters = require('./removeDuplicateLetters');

xdescribe('316. Remove Duplicate Letters', () => {

  it('should remove duplicate letters so that every letter appears only once', () => {
    expect(removeDuplicateLetters('bcabc')).toBe('abc');
    expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb');
  });

});