const longestPalindromeSubseq = require('./longestPalindromeSubseq.js');

describe('Longest Palindromic Subsequence', () => {

  it('should find the longest palindromic subsequence', () => {
    expect(longestPalindromeSubseq('bbbab')).toBe(4); // 'bbbb'
    expect(longestPalindromeSubseq('cbbd')).toBe(2); // 'bb'
    expect(longestPalindromeSubseq('a')).toBe(1); // 'a'
  });

});