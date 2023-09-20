const findDuplicate = require('./findDuplicate');

xdescribe('287. Find the Duplicate Number', () => {

  it('should find the repeated number with constant space', () => {
    expect(findDuplicate([1,3,4,2,2])).toBe(2);
    expect(findDuplicate([3,1,3,4,2])).toBe(3);
  });

});