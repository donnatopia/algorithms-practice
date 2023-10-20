const isSubsetOf = require('./isSubsetOf');

xdescribe('43. Is Subset Of', () => {

  it('should return true if context array is a subset of input array', () => {
    expect(isSubsetOf(['commit','push'], ['commit','rebase','push','blame'])).toBe(true);
    expect(isSubsetOf(['merge','reset','reset'], ['reset','merge','add','commit'])).toBe(true);
  });

  it('should return true for an empty array as a subset', () => {
    expect(isSubsetOf([], ['commit','rebase','push','blame'])).toBe(true);
  });

  it('should return false if context array is not a subset of input array', () => {
    expect(isSubsetOf(['pull','merge'], ['commit','rebase','push','blame'])).toBe(false);
    expect(isSubsetOf(['reset','commit'], ['merge','add','commit'])).toBe(false);
  });

  it('should handle input with duplicate elements', () => {
    expect(isSubsetOf(['commit','push','push'], ['commit','rebase','push','blame'])).toBe(true);
    expect(isSubsetOf(['merge','reset','reset'], ['reset','reset','merge','add','commit'])).toBe(true);
  });

  it('should handle extra credit case with objects and arrays', () => {
    expect(isSubsetOf([{ key: 'value' }], [{ key: 'value' }, { another: 'object' }])).toBe(true);
    expect(isSubsetOf([[1, 2], { key: 'value' }], [[1, 2], { key: 'value' }, { another: 'object' }])).toBe(true);
    expect(isSubsetOf([{ key: 'value' }, [1, 2]], [[1, 2], { key: 'value' }, { another: 'object' }])).toBe(true);
    expect(isSubsetOf([{ key: 'value' }, [1, 2], { another: 'object' }], [[1, 2], { key: 'value' }])).toBe(false);
  });

});