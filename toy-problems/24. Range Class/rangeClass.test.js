const Range = require('./rangeClass');

xdescribe('24. Range Class', () => {

  const range1 = new Range(0, 10);
  const range2 = new Range(0, 10, 2);
  const range3 = new Range(10, 0);
  const range4 = new Range (0, 10, -2);
  const range5 = new Range (10, 0, 2);
  const range6 = new Range();
  const range7 = new Range(1);

  it('should get the size of a range', () => {
    expect(range1.size()).toBe(11);
    expect(range2.size()).toBe(6);
    expect(range3.size()).toBe(11);
    expect(range4.size()).toBe(6);
    expect(range5.size()).toBe(6);
    expect(range7.size()).toBe(1);
  });

  it('should use the cb function', () => {
    let range1Plus1 = [];
    range1.each(val => range1Plus1.push(val + 1));

    expect(range1Plus1).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    let range2Plus1 = [];
    range2.each(val => range2Plus1.push(val + 1));

    expect(range2Plus1).toStrictEqual([1, 3, 5, 7, 9, 11]);
  })

  it('should check if a range includes a number', () => {
    expect(range1.includes(1)).toBe(true);
    expect(range2.includes(1)).toBe(false);
    expect(range3.includes(1)).toBe(true);
    expect(range4.includes(1)).toBe(false);
    expect(range5.includes(1)).toBe(false);
    expect(range7.includes(1)).toBe(true);
  })

  it('should return null if no start interval is given', () => {
    expect(range6).toBe(null);
  })

});