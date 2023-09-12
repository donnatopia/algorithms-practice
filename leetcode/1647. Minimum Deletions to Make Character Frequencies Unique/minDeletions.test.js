const minDeletions = require('./minDeletions');

xdescribe('1647. Minimum Deletions to Make Character Frequencies Unique', () => {

  it('should return 0 if all character frequencies are different', () => {
    expect(minDeletions('aab')).toBe(0);
  });

  it('should return the min deletions to ensure all character frequencies are unique', () => {
    expect(minDeletions('aaabbbcc')).toBe(2);
  })

  it('should not require the string to be sorted', () => {
    expect(minDeletions('ceabaacb')).toBe(2);
  })

  it('should ignore frequncies of 0 when character is deleted', () => {
    expect(minDeletions('abcabc')).toBe(3);
    expect(minDeletions('adec')).toBe(3);
  })

});