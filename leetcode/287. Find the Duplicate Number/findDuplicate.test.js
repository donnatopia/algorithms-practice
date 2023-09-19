const findDuplicate = require('./findDuplicate');

xdescribe('287. Find the Duplicate Number', () => {

  it('should find the repeated number with constant space', () => {
    expect(findDuplicate([1,3,4,2,2])).toBe(2);
    expect(findDuplicate([3,1,3,4,2])).toBe(3);
  });

  it ('shouldn\'t modify the original array', () => {
    let arr = [1, 2, 3, 6, 6, 2];
    let result = findDuplicate(arr);

    expect(result).toBe(6);
    expect(arr).toStrictEqual([1, 2, 3, 6, 6, 2]);
  })

});