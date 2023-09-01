const countBits = require('./countBits');

xdescribe('338. Counting Bits', () => {

  it('should return an array where each element is the number of 1s in the binary representation of i', () => {
    expect(countBits(2)).toStrictEqual([0,1,1]);
    expect(countBits(5)).toStrictEqual([0,1,1,2,1,2]);
  });

});