const isAnagram = require('./isAnagram.js');

xdescribe('242. Valid Anagram', () => {

  it('should return true for anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

});