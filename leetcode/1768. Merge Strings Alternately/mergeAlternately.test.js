const mergeAlternately = require('./mergeAlternately.js');

describe('Problem', () => {

  it('should return merged strings when word1 and word2 are the same length', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
  });

  it('should return merged strings when word1 is shorter than word2', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
  });

  it('should return merged strings when word1 is longer than word2', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });

});