const deepEquals = require('./deepEquality');

xdescribe('16. Deep Equality', () => {

  it('should return true if two objcts are deeply equal to one another', () => {
    expect(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})).toBe(true);
  });

  it('should return false if two objects are not deeply equal to one another', () => {
    expect(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})).toBe(false);
  });

  it('should return true if the objects are both empty', () => {
    expect(deepEquals({}, {})).toBe(true);
  })

});