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

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

  - I:
  - O:
  - C:
  - E:

### Strategy
-

### Pseudocode
-

## <a href='./MyHashMap.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```