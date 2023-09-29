const decodeAtIndex = require('./decodeAtIndex');

xdescribe('880. Decoded String at Index', () => {

  it('should return the kth letter in the decoded string', () => {
    expect(decodeAtIndex('leet2code3', 10)).toBe('o');
    expect(decodeAtIndex('ha22', 5)).toBe('h');
    expect(decodeAtIndex('a2345678999999999999999', 1)).toBe('a');
  });

});