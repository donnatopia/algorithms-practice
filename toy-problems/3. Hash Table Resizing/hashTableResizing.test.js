const HashTable = require('./hashTableResizing');

xdescribe('3. Hash Table Resizing', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it('should insert and retrieve values correctly', () => {
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    expect(hashTable.retrieve('key1')).toBe('value1');
    expect(hashTable.retrieve('key2')).toBe('value2');
  });

  it('should handle collisions correctly', () => {
    hashTable.insert('key', 'value1');
    hashTable.insert('k1y', 'value2');
    expect(hashTable.retrieve('key')).toBe('value1');
    expect(hashTable.retrieve('k1y')).toBe('value2');
  });

  it('should remove values correctly', () => {
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    hashTable.remove('key1');
    expect(hashTable.retrieve('key1')).toBeUndefined();
  });

  it('should resize when exceeding 3/4th load factor', () => {
    // Insert more items to trigger the resize
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    hashTable.insert('key3', 'value3');
    hashTable.insert('key4', 'value4'); // This should trigger a resize
    expect(hashTable._size).toBeGreaterThan(4); // Check that resizing occurred
  });

  it('should resize by half when below 1/4th load factor', () => {
    // Insert items and then remove to trigger the resize down
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    hashTable.remove('key1');
    hashTable.remove('key2'); // This should trigger a resize
    expect(hashTable._size).toBeLessThan(1); // Check that resizing occurred
  });

});