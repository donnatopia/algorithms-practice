const maxSlidingWindow = require('./maxSlidingWindow');

describe('239. Sliding Window Maximum', () => {

  it('should return the max sliding window array', () => {
    expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toStrictEqual([3,3,5,5,6,7]);
    expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
  });

});