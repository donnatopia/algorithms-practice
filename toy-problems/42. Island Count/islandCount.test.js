const islandCount = require('./islandCount');

xdescribe('42. Island Count', () => {

  it('should accurately count all the islands in any input string', () => {
    expect(islandCount('.0...\n.00..\n....0')).toBe(2);
    expect(islandCount('..000.\n..000.\n..000.\n.0....\n..000.')).toBe(3);
    expect(islandCount('..000.\n..0...\n..0.0.\n..0...\n..000.')).toBe(2);
    expect(islandCount('0....0\n......\n..00..\n......\n0....0')).toBe(5);
    expect(islandCount('00...0\n0...00\n......\n0.0.0.\n0.....')).toBe(5);
    expect(islandCount('0...0\n0...0\n00000')).toBe(1);
    expect(islandCount('0...0\n..0..\n0...0')).toBe(5);
    expect(islandCount('.')).toBe(0);
    expect(islandCount('0')).toBe(1);
    expect(islandCount('...\n..0\n.00')).toBe(1);
    expect(islandCount('.....\n..0..\n.000.\n..0..\n.....')).toBe(1);
    expect(islandCount('00..00\n..00..\n00..00\n..00..')).toBe(6);
  });

});