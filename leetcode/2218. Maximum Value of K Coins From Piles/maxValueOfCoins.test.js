// import the function
const maxValueOfCoins = require('./maxValueOfCoins.js');

// change to describe.only to test only this suite
describe('Maximum Value of K Coins From Piles', () => {

  it('should find the maximum value of coins from piles', () => {
    expect(maxValueOfCoins([[1,100,3],[7,8,9]], 2)).toBe(101);
    expect(maxValueOfCoins([[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], 7)).toBe(706);
  });
});