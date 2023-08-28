const search = require('./search');

xdescribe('33. Search in Rotated Sorted Array', () => {

  it('should return the index of the target value in nums', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
  });

  it('should return -1 if target value is NOT in nums', () => {
    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
    expect(search([1], 0)).toBe(-1);
  });

});