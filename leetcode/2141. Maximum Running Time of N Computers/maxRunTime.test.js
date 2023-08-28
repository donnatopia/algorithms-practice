const maxRunTime = require('./maxRunTime.js');

xdescribe('2141. Maximum Running Time of N Computers', () => {

  it('should return the maximum number of minutes you can run all the n computers simultaneously', () => {
    expect(maxRunTime(2, [3, 3, 3])).toBe(4);
    expect(maxRunTime(2, [1, 1, 1, 1])).toBe(2);
    expect(maxRunTime(12,[11,89,16,32,70,67,35,35,31,24,41,29,6,53,78,83])).toBe(43)
  });

});