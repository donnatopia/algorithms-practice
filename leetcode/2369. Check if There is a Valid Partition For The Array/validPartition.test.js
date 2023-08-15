const validPartition = require('./validPartition');

xdescribe('2369. Check if There is a Valid Partition For The Array', () => {

  it('should return true if the array has AT LEAST one valid partition', () => {
    expect(validPartition([4, 4, 4, 5, 6])).toBe(true);
  });

  it('should return false if the array does not have any valid partition', () => {
    expect(validPartition([1,1,1,2])).toBe(false);
  })

});