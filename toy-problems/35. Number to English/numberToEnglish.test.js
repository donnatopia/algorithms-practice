const numberToEnglish = require('./numberToEnglish');

xdescribe('35. Number To English', () => {

  it('should return number as string using English words', () => {
    expect(numberToEnglish(7)).toBe('seven');
    expect(numberToEnglish(23)).toBe('twenty-three');
    expect(numberToEnglish(575)).toBe('five hundred seventy-five');
    expect(numberToEnglish(78193512)).toBe('seventy-eight million one hundred ninety-three thousand five hundred twelve');
  });

  xit('should return decimals as strings', () => {
    expect(numberToEnglish(150043.273)).toBe('one hundred fifty thousand forty-three and two hundred seventy three thousandths');
  })
});