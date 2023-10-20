const translateRomanNumeral = require('./romanNumeralTranslator');

xdescribe('27. Roman Numeral Translator', () => {

  it('should return null if input is not a string', () => {
    expect(translateRomanNumeral(123)).toBe(null);
    expect(translateRomanNumeral(null)).toBe(null);
    expect(translateRomanNumeral(undefined)).toBe(null);
    expect(translateRomanNumeral([])).toBe(null);
    expect(translateRomanNumeral({})).toBe(null);
  });

  it('should correctly translate valid Roman numerals', () => {
      expect(translateRomanNumeral("I")).toBe(1);
      expect(translateRomanNumeral("IV")).toBe(4);
      expect(translateRomanNumeral("IX")).toBe(9);
      expect(translateRomanNumeral("X")).toBe(10);
      expect(translateRomanNumeral("XL")).toBe(40);
      expect(translateRomanNumeral("LX")).toBe(60);
      expect(translateRomanNumeral("XC")).toBe(90);
      expect(translateRomanNumeral("C")).toBe(100);
      expect(translateRomanNumeral("CD")).toBe(400);
      expect(translateRomanNumeral("D")).toBe(500);
      expect(translateRomanNumeral("CM")).toBe(900);
      expect(translateRomanNumeral("M")).toBe(1000);
      expect(translateRomanNumeral("MMMCMXCIV")).toBe(3994);
  });

  it('should return 0 if passed an empty string', () => {
    expect(translateRomanNumeral('')).toBe(0);
  })

});