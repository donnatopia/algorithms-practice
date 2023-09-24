const champagneTower = require('./champagneTower');

xdescribe('799. Champagne Tower', () => {

  it('should return the fullness of the query glass', () => {
    expect(champagneTower(1, 1, 1)).toBe(0);
    expect(champagneTower(2, 1, 1)).toBe(0.5);
    expect(champagneTower(100000009, 33, 17)).toBe(1);
  });

});