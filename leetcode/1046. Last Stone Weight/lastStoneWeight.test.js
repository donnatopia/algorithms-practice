const lastStoneWeight = require('./lastStoneWeight.js');

xdescribe('Last Stone Weight', () => {

  it('should calculate the last stone remaining', () => {
    expect(lastStoneWeight([2,7,4,1,8,1])).toBe(1);
    expect(lastStoneWeight([1])).toBe(1);
    expect(lastStoneWeight([1, 3])).toBe(2);
  });

  it('should return 0 if there are no stones remaining', () => {
    expect(lastStoneWeight([])).toBe(0);
    expect(lastStoneWeight([1, 1])).toBe(0);
  });

});