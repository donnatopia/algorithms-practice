const summaryRanges = require('./summaryRanges.js');

xdescribe('228. Summary Ranges', () => {

  it('should find the summary ranges', () => {
    expect(summaryRanges([0,1,2,4,5,7])).toStrictEqual(["0->2","4->5","7"]);
    expect(summaryRanges([0,2,3,4,6,8,9])).toStrictEqual(["0","2->4","6","8->9"]);
  });

});