const countNegatives = require('./countNegatives.js');

xdescribe('1351. Count Negative Numbers in a Sorted Matrix', () => {

  it('should count negative numbers in a sorted matrix', () => {
    expect(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])).toBe(8);
    expect(countNegatives([[3,2],[1,0]])).toBe(0);
  });

});