const Range = require('./rangeClass');

xdescribe('24. Range Class', () => {

  it('should get the size of a range', () => {
    const range1 = new Range(0, 10);
    const range2 = new Range(0, 10, 2);
    const range3 = new Range(10, 0);
    const range4 = new Range (10, 0, -2);
    const range5 = new Range (10, 0, 2);
    const range6 = new Range(1);
    const range7 = new Range(3, 100, 3);

    expect(range1.size()).toBe(11);
    expect(range2.size()).toBe(6);
    expect(range3.size()).toBe(11);
    expect(range4.size()).toBe(6);
    expect(range5.size()).toBe(6);
    expect(range6.size()).toBe(1);
    expect(range7.size()).toBe(33);
  });

  it('should use the cb function', () => {
    const range1 = new Range(0, 10);
    const range1Plus1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let index1 = 0;

    range1.each((val) => {
      expect(val + 1).toBe(range1Plus1[index1]);
      index1++;
    })


    const range2 = new Range(0, 10, 2);
    const range2Plus1 = [1, 3, 5, 7, 9, 11];
    let index2 = 0;

    range2.each((val) => {
      expect(val + 1).toBe(range2Plus1[index2]);
      index2++;
    });


    const range3 = new Range(10, 0);
    const range3Times2 = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0];
    let index3 = 0;

    range3.each((val) => {
      expect(val * 2).toBe(range3Times2[index3])
      index3++;
    })

    const range4 = new Range (10, 0, -2);
    const range4Divide2 = [5, 4, 3, 2, 1, 0];
    let index4 = 0;

    range4.each((val) => {
      expect(val / 2).toBe(range4Divide2[index4]);
      index4++;
    })
  })

  it('should check if a range includes a number', () => {
    const range1 = new Range(0, 10);
    const range2 = new Range(0, 10, 2);
    const range3 = new Range(10, 0);
    const range4 = new Range (10, 0, -2);
    const range5 = new Range (10, 0, 2);
    const range6 = new Range(1);
    const range7 = new Range(3, 100, 3);

    expect(range1.includes(1)).toBe(true);
    expect(range2.includes(1)).toBe(false);
    expect(range3.includes(1)).toBe(true);
    expect(range4.includes(1)).toBe(false);
    expect(range5.includes(1)).toBe(false);
    expect(range6.includes(1)).toBe(true);
    expect(range7.includes(1)).toBe(false);
  })

});