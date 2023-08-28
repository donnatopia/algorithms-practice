const canMakeArithmeticProgression = require('./canMakeArithmeticProgression.js');

xdescribe('1502. Can Make Arithmetic Progression From Sequence', () => {

  it('should evaluate true if there is an artithmetic progression', () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBe(true);
  });

  it('should evaluate false if there is not an artithmetic progression', () => {
    expect(canMakeArithmeticProgression([1, 2, 4])).toBe(false);
  });

});