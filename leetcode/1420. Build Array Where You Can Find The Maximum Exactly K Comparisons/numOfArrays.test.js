const numOfArrays = require('./numOfArrays');

xdescribe('1420. Build Array Where You Can Find The Maximum Exactly K Comparisons', () => {

  it('should return the number of ways to build array under mentioned conditions', () => {
    expect(numOfArrays(2, 3, 1)).toBe(6);
    expect(numOfArrays(5, 2, 3)).toBe(0);
    expect(numOfArrays(9, 1, 1)).toBe(1);
  });

});