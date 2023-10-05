const majorityElement = require('./majorityElement');

xdescribe('229. Majority Element II', () => {

  it('should find all elements that appear more than n/3 times', () => {
    expect(majorityElement([3,2,3])).toStrictEqual([3]);
    expect(majorityElement([1])).toStrictEqual([1]);
    expect(majorityElement([1,2])).toStrictEqual([1,2]);
  });

});