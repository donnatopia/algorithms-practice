const MyHashMap = require('./MyHashMap');

xdescribe('706. Design HashMap', () => {

  it('should implement the MyHashmap class', () => {
    let map = new MyHashMap();
    map.put(1, 1);
    map.put(2, 2);

    expect(map.get(1)).toBe(1);
    expect(map.get(3)).toBe(-1);

    map.put(2, 1);

    expect(map.get(2)).toBe(1);

    map.remove(2);

    expect(map.get(2)).toBe(-1);
  });

});