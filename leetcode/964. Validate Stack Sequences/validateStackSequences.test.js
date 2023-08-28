const validateStackSequences = require('./validateStackSequences.js');

xdescribe('Validate Stack Sequences', () => {

  it('should return true for valid stack sequences', () => {
    expect(validateStackSequences([1,2,3,4,5], [4,5,3,2,1])).toBe(true);
  });

  it('should return false for invalid stack sequences', () => {
    expect(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])).toBe(false);
  });

});