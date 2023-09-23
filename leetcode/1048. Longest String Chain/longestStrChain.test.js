const longestStrChain = require('./longestStrChain');

xdescribe('1048. Longest String Chain', () => {

  it('should return the length of the longest possible word chain', () => {
    expect(longestStrChain(["a","b","ba","bca","bda","bdca"])).toBe(4);
    expect(longestStrChain(["xbc","pcxbcf","xb","cxbc","pcxbc"])).toBe(5);
    expect(longestStrChain(["abcd","dbqca"])).toBe(1);
  });

});