const editDistance = require('./editDistance');

xdescribe('36. Edit Distance', () => {

  it('should return the least amount edits to convert str1 to str2', () => {
    expect(editDistance("cat", "cut")).toBe(1);
    expect(editDistance("wednesday", "sunday")).toBe(5);
    expect(editDistance("hackerrank", "hackreactor")).toBe(6);
  });

});