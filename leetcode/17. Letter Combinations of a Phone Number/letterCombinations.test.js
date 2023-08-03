const letterCombinations = require('./letterCombinations');

describe('17. Letter Combinations of a Phone Number', () => {

  it('should produce all the letter combinations', () => {
    expect(letterCombinations('23')).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
    expect(letterCombinations('2')).toStrictEqual(["a", "b", "c"]);
  });

  it('should produce an empty array for an empty string', () => {
    expect(letterCombinations("")).toStrictEqual([]);
  });

});