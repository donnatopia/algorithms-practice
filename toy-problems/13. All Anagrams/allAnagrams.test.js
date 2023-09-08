const allAnagrams = require('./allAnagrams');

xdescribe('13. All Anagrams', () => {

  it('should return all anagrams for word with all unique characters', () => {
    const expectedAnagrams = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
    const generatedAnagrams = allAnagrams('abc');

    expect(generatedAnagrams).toEqual(expect.arrayContaining(expectedAnagrams));
    expect(generatedAnagrams.length).toBe(expectedAnagrams.length);
  });

  it('should return the same string in an array for singular letter strings', () => {
    const expectedAnagrams = ['a'];
    const generatedAnagrams = allAnagrams('a');

    expect(generatedAnagrams).toEqual(expect.arrayContaining(expectedAnagrams));
    expect(generatedAnagrams.length).toBe(expectedAnagrams.length);
  });

  it('should return an array with an empty string for empty string input', () => {
    expect(allAnagrams('')).toStrictEqual(['']);
  })

  it('should return all unique unique anagrams for strings with repeated characters', () => {
    const expectedAnagrams = [
      'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa'
    ];

    const generatedAnagrams = allAnagrams('apps');

    expect(generatedAnagrams).toEqual(expect.arrayContaining(expectedAnagrams));
    expect(generatedAnagrams.length).toBe(expectedAnagrams.length);
  })

});