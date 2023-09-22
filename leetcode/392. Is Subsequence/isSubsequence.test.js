const isSubsequence = require('./isSubsequence');

xdescribe('392. Is Subsequence', () => {

  it('should return true if s is a subsequence of t', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
    expect(isSubsequence('ace', 'abcde')).toBe(true);
  });

  it('should return false if s is NOT a subsequence of t', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
    expect(isSubsequence('aec', 'abcde')).toBe(false);
  })

});