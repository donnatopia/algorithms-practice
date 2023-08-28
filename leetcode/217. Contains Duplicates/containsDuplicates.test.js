const containsDuplicates = require('./containsDuplicates.js');

xdescribe('217. Contains Duplicates', () => {

  it('should return true if there are duplicates', () => {
    expect(containsDuplicates([1,2,3,1])).toBe(true);
    expect(containsDuplicates([1,1,1,3,3,4,3,2,4,2])).toBe(true);
  });

  it('should return false if there are no duplicates', () => {
    expect(containsDuplicates([1,2,3,4])).toBe(false);
  });

});