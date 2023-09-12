const telephoneWords = require('./telephoneWords');

xdescribe('10. Telephone Words', () => {

  it('should return 1 permutation for "0001"', () => {
    expect(telephoneWords('0001').length).toBe(1);
  });

  it('should return 3 permutations for "0002"', () => {
    expect(telephoneWords('0002').length).toBe(3);
  })

  it('should return 9 permutations for "1123"', () => {
    expect(telephoneWords('1123').length).toBe(9);
  })

  it('should return 27 permutations for "1234"', () => {
    expect(telephoneWords('1234').length).toBe(27);
  })

  it('should return 144 permutations for "5987"', () => {
    expect(telephoneWords('5987').length).toBe(144);
  })

});