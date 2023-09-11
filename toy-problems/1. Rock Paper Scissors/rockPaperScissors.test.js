const rockPaperScissors = require('./rockPaperScissors');

xdescribe('1. Rock Paper Scissors', () => {

  it('should return an array of all possible sequences for 3 rounds', () => {
    const sequences = rockPaperScissors(3);
    expect(sequences).toEqual([
      'RRR', 'RRP', 'RRS',
      'RPR', 'RPP', 'RPS',
      'RSR', 'RSP', 'RSS',
      'PRR', 'PRP', 'PRS',
      'PPR', 'PPP', 'PPS',
      'PSR', 'PSP', 'PSS',
      'SRR', 'SRP', 'SRS',
      'SPR', 'SPP', 'SPS',
      'SSR', 'SSP', 'SSS',
    ]);
  });

  it('should return an empty array for 0 rounds', () => {
    const sequences = rockPaperScissors(0);
    expect(sequences).toEqual([]);
  });

  it('should return an array of all possible sequences for 5 rounds', () => {
    const sequences = rockPaperScissors(5);
    expect(sequences.length).toBe(243); // There should be 3^5 = 243 sequences
  });

  it('should return an empty array for negative rounds', () => {
    const sequences = rockPaperScissors(-2);
    expect(sequences).toEqual([]);
  });

});