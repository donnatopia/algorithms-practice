const wordBreak = require('./wordBreak');

describe('139. Word Break', () => {

  it('should return true if s can be segmented into a space-separted sequence', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
    expect(wordBreak('a', ['a'])).toBe(true);
  });

  it('should return false if s CAN NOT be segmeneted into a space-separated sequences', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
  });

});