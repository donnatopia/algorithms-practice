# 706. Design HashMap

## <a href='https://leetcode.com/problems/design-hashmap/description/?envType=daily-question&envId=2023-10-04'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Design a HashMap without using any built-in hash table libraries.

Implement the `MyHashMap` class:

- `MyHashMap()` initializes the object with an empty map.
- `void put(int key, int value)` inserts a `(key, value)` pair into the HashMap. If the `key` already exists in the map, update the corresponding `value`.
- `int get(int key)` returns the `value` to which the specified `key` is mapped, or `-1` if this map contains no mapping for the `key`.
- `void remove(key)` removes the `key` and its corresponding `value` if the map contains the mapping for the `key`.


### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]` `[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]` | `[null, null, null, 1, -1, null, 1, null, -1]` |

### Constraints:

- `0 <= key, value <= 10^6`
- At most `10^4` calls will be made to `put`, `get`, and `remove`.

## <a href='./MyHashMap.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 155 ms | 52.57% |
| Memory | 52.53 MB | 38.20% |

### Time and Space Complexity
  - Time Complexity: `O(1)`
    - put, get, and remove all use intrinsic object functions that are constant time complexity
  - Space Complexity: `O(n)`
    - the storage of the table is dependent on each instance

### Input, Output, Constraints, Edge (IOCE)

  - I: N/A
  - O: new MyHashMap instance with put, get, remove function
  - C: N/A
  - E: N/A

  - put function
    - I: key, value
    - O: null
    - C: N/A
    - E: if the key already exists, replace the value with new value

  - get function
    - I: key
    - O: value or -1 if key does not exist
    - C: N/A
    - E: value is 0 => return 0

  - remove function
    - I: key
    - O: null
    - C: N/A
    - E: N/A

### Strategy / Psuedocode
- MyHashMap is an object
  - put sets the key at the obj to the value
  - get returns the value if the key exists in the object or -1 otherwise
  - remove deletes the key from the obj

## <a href='./MyHashMap.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```