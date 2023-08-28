const change = require('./change');

xdescribe('518. Coin Change II', () => {

  it('should return the number of combinations that make up the amount', () => {
    expect(change(5, [1, 2, 5])).toBe(4);
    expect(change(10, [10])).toBe(1);
  });

  it('should return 0 if there are no combinations that can make the amount', () => {
    expect(change(3, [2])).toBe(0);
  })

});