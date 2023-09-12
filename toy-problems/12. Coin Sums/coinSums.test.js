const makeChange = require('./coinSums');

xdescribe('12. Coin Sums', () => {
  it('should return 1 for makeChange(1)', () => {
    expect(makeChange(1)).toBe(1);
  });

  it('should return 2 for makeChange(2)', () => {
    expect(makeChange(2)).toBe(2);
  });

  it('should return 2 for makeChange(3)', () => {
    expect(makeChange(3)).toBe(2);
  });

  it('should return 4 for makeChange(5)', () => {
    expect(makeChange(5)).toBe(4);
  });

  it('should return 6 for makeChange(7)', () => {
    expect(makeChange(7)).toBe(6);
  });

  it('should return 8 for makeChange(9)', () => {
    expect(makeChange(9)).toBe(8);
  });

  it('should return 15 for makeChange(12)', () => {
    expect(makeChange(12)).toBe(15);
  });

  it('should return 22 for makeChange(15)', () => {
    expect(makeChange(15)).toBe(22);
  });

  it('should return 34 for makeChange(19)', () => {
    expect(makeChange(19)).toBe(34);
  });

  it('should return 68 for makeChange(25)', () => {
    expect(makeChange(25)).toBe(68);
  });

  it('should return 129 for makeChange(32)', () => {
    expect(makeChange(32)).toBe(129);
  });

  it('should return 271 for makeChange(42)', () => {
    expect(makeChange(42)).toBe(271);
  });

  it('should return 565 for makeChange(54)', () => {
    expect(makeChange(54)).toBe(565);
  });

  it('should return 1311 for makeChange(70)', () => {
    expect(makeChange(70)).toBe(1311);
  });

  it('should return 3229 for makeChange(91)', () => {
    expect(makeChange(91)).toBe(3229);
  });

  it('should return 8443 for makeChange(118)', () => {
    expect(makeChange(118)).toBe(8443);
  });

  it('should return 24305 for makeChange(154)', () => {
    expect(makeChange(154)).toBe(24305);
  });

  it('should return 73682 for makeChange(200)', () => {
    expect(makeChange(200)).toBe(73682);
  });

  it('should return 1 for makeChange(0)', () => {
    expect(makeChange(0)).toBe(1);
  });
});
