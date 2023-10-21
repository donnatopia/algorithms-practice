const longestRun = require('./longestRun');

xdescribe('44. Longest Run', () => {

  it('should return the indices of the longest run of identical characters', () => {
    expect(longestRun('abbbcc')).toEqual([1, 3]);
    expect(longestRun('aabbc')).toEqual([0, 1]);
    expect(longestRun('abcd')).toEqual([0, 0]);
    expect(longestRun('aaaaa')).toEqual([0, 4]);
  });

  it('should return null for an empty string input', () => {
    expect(longestRun('')).toBe(null);
  });

  it('should handle strings with multiple longest runs', () => {
    expect(longestRun('aabbcc')).toEqual([0, 1]);
    expect(longestRun('aaabbb')).toEqual([0, 2]);
    expect(longestRun('aaabbbccc')).toEqual([0, 2]);
    expect(longestRun('aaabbbcccdd')).toEqual([0, 2]);
  });

  it('should handle long, random strings', () => {
    const input = 'aaabbccdddddeeeeeffffffggggggghhhhhhhhiiiijjjjjjjjkkkkkkkkkllllllllllmmmmmmmmmmmnnnnnnnnnnn';
    expect(longestRun(input)).toEqual([69, 79]);
  });

});