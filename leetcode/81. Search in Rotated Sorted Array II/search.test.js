const search = require('./search');

xdescribe('81. Search in Rotated Sorted Array II', () => {

  it('should return true if target is present in nums', () => {
    expect(search([2,5,6,0,0,1,2], 0)).toBe(true);
    expect(search([1,0,1,1,1], 0)).toBe(true);
    expect(search([3, 5, 1], 1)).toBe(true);
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(true);
  });

  it('should return false if target is NOT present in nums', () => {
    expect(search([2,5,6,0,0,1,2], 3)).toBe(false);
  })

});