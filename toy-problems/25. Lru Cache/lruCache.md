# 25. Lru Cache

## About the Problem

 Design and implement an LRU, or Least Recently Used, cache.

 An LRU cache gives O(1) get(key) and set(key, val) operations,
 much like a hashtable, but once it reaches its limit for stored
 number of items, removes the least recently used (i.e. the oldest
 by get-date) item from the cache in O(1) time.

 For instance:

 var cache = new LRUCache(3); // limit of 3 items
 cache.set("item1", 1);
 cache.set("item2", 2);
 cache.set("item3", 3);
 cache.set("item4", 4);

 cache.get("item3") //=> 3
 cache.get("item2") //=> 2
 // item1 was removed because it was the oldest item by insertion/usage
 cache.get("item1") //=> null

 // item4 is removed to make room, because it is the oldest by usage,
 // which takes priority.
 cache.set("item5", 5);

 // item3 is also removed, because it was retrieved before item2 was
 // last retrieved.
 cache.set("item6", 6);

 You will need a doubly-linked list (provided).

## <a href='./lruCache.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

 - I: number, or the limit to the size of the LRUCache
 - O:
  - LRUCache data structure that stores kv pairs to a specified size limit
    - get function => provides key and retrieves the value
    - set function => provides the key and the value
    - size function => returns the size of the cache
  - deletion of kv pairs are based on values that have been least recently used
 - C:
  - get and set functions must run on O(1) time
  - provided doubly linked list data structure
 - E:
  - values of previously set values can be changed

### Strategy / Pseudocode
- create the cache using a doubly linked list
  - head will be the most recently used item
    - access to the key will move the node to the head
  - tail will be the least recently used item
    - when size exceeds the limit, the tail will be deleted
- for constant look-up time, use a map to keep track of the key and the node

- LRUCache Constructor
  - store the limit as the limit
  - store the size as 0
  - store the cache as a new List
  - store the map values as an empty object
    - key will be the key
    - value will the be the node where the key is located

- LRUCacheItem Constructor, which takes in a val and key
  - stores the key
  - stores the val
  - stores the node

- size function
  - returns this._size

- get function
  - if the key is present in the map
    - move the node to the front of the cache
    - return the value
  - else
    - return null

- set function
  - if the key is present in the map
    - change the value at the key to the new value
    - move the node to the front of the cache
  - else
    - create a new node for the key value pair
    - update the map for the key to the new node
    - insert the node into the front of the cache
    - increment the size

    - if the size is greater than the limit
      - retreive the tail of the cache
      - delete the kv pair for the tail
      - pop off the tail

## <a href='./lruCache.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```