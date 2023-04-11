const isValid = require('./validParentheses');

// change to describe.only to test only this suite
describe('Valid Parentheses', () => {

  it('should return true for valid parentheses pairing', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('(){}[]')).toBe(true);
    expect(isValid('({[]})')).toBe(true);
  });

  it('should return false for invalid parentheses pairing', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('(()')).toBe(false);
    expect(isValid(')(')).toBe(false);
  });

});