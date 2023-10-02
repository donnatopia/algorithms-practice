const find132pattern = require('./find132pattern');

xdescribe('456. 132 Pattern', () => {

  it('should return true if there is a 132 pattern', () => {
    expect(find132pattern([3,1,4,2])).toBe(true);
    expect(find132pattern([-1,3,2,0])).toBe(true);
    expect(find132pattern([3,5,0,3,4])).toBe(true);
  });

  it('should return false if there is NOT a 132 pattern', () => {
    expect(find132pattern([1,2,3,4])).toBe(false);
  })

});