const getAverages = require('./getAverages.js');

describe('2090. K Radius Subarray Averages', () => {

  it('should return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i', () => {
    expect(getAverages([7,4,3,9,1,8,5,2,6], 3)).toStrictEqual([-1,-1,-1,5,4,4,-1,-1,-1]);
    expect(getAverages([100000], 0)).toStrictEqual([100000]);
    expect(getAverages([8], 100000)).toStrictEqual([-1]);
    expect(getAverages([0], 0)).toStrictEqual([0]);
    expect(getAverages([1,11,17,21,29], 4)).toStrictEqual([-1,-1,-1,-1,-1]);
  });

});