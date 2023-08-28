const removeStars = require('./removeStars.js');

xdescribe('Removing Stars From a String', () => {

  it('should properly remove stars from a string', () => {
    expect(removeStars('leet**cod*e')).toBe('lecoe');
    expect(removeStars('erase*****')).toBe('');
    expect(removeStars('do**a')).toBe('a');
  });
});