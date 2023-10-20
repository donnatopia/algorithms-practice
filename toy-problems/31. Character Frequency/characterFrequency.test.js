const characterFrequency = require('./characterFrequency');

xdescribe('31. Character Frequency', () => {

  it('should handle empty string', () => {
    expect(characterFrequency('')).toEqual([]);
  });

  it('should return character frequencies in descending order by frequency and ascending order by character', () => {
    expect(characterFrequency('mississippi')).toEqual([
      ['i', 4],
      ['s', 4],
      ['p', 2],
      ['m', 1]
    ]);

    expect(characterFrequency('miaaiaaippi')).toEqual([
      ['a', 4],
      ['i', 4],
      ['p', 2],
      ['m', 1]
    ]);

    expect(characterFrequency('mmmaaaiiibbb')).toEqual([
      ['a', 3],
      ['b', 3],
      ['i', 3],
      ['m', 3]
    ]);
  });

  it('should handle input with only one character', () => {
    expect(characterFrequency('aaaaaa')).toEqual([['a', 6]]);
  });

  it('should handle input with different characters', () => {
    expect(characterFrequency('abcdefg')).toEqual([
      ['a', 1],
      ['b', 1],
      ['c', 1],
      ['d', 1],
      ['e', 1],
      ['f', 1],
      ['g', 1]
    ]);
  });

});