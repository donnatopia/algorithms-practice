const lengthOfLongestSubstring = require('./lengthOfLongestSubstring.js');

describe('Length of Longest Substring without Repeating Characters', () => {

  it('should be correctly produce the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('donnawong')).toBe(5);
  });

  it('should work with empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should correctly return 1 for solely' , () => {
    expect(lengthOfLongestSubstring('bbbbbb')).toBe(1);
  })

});