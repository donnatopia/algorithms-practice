const LRUCache = require('./lruCache.js');

xdescribe('25. Lru Cache', () => {

  it('should be able to set and get items', () => {
    let cache = new LRUCache(3);
    cache.set('A', 1);
    cache.set('B', 2);
    cache.set('C', 3);

    expect(cache.get('A')).toBe(1);
    expect(cache.get('B')).toBe(2);
    expect(cache.get('C')).toBe(3);
  });

  it('should eject the least recently used item from the cache', () => {
    let cache = new LRUCache(3);
    cache.set('A', 1);
    cache.set('B', 2);
    cache.set('C', 3);
    cache.set('D', 4);

    expect(cache.get('A')).toBe(null);
    expect(cache.get('B')).toBe(2);

    cache.set('E', 5);

    expect(cache.get('C')).toBe(null);
    expect(cache.get('E')).toBe(5);
  })

  it('should not exceed the limit', () => {
    let cache = new LRUCache(3);
    cache.set('A', 1);
    cache.set('B', 2);
    cache.set('C', 3);
    cache.set('D', 4);

    expect(cache.size()).toBe(3);
  })

});