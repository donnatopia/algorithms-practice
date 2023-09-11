# 3. Hash Table Resizing

## About the Problem

Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
Be sure to handle hashing collisions correctly.

Set your hash table up to double the storage limit as soon as the total number of items stored is greater than 3/4th of the number of slots in the storage array.

Resize by half whenever utilization drops below 1/4.

### Examples

Visual Representation of Hash Table
{
  0: [],
  1: [[key1, value1]],
  2: [],
  3: [[key2, value2], [key4, value4]],
  4: [[key6, value6]],
  5: [],
  6: [[key3, value3]],
  7: [[key5, value5]],
}

- each index is calculated with a hashing function
- collisions may occur when kv pairs have the same calculated index

## <a href='./hashTableResizing.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

- insert
  - I: key and value
  - O: N/A
    - SE: needs to add the kv pair into the hashtable
  - C: N/A
  - E:
    - double the storage limit as soon as the total number of items stored is greater than 3/4th of the number of slots in the storage array

- retrieve
  - I: key
  - O: value
  - C: N/A
  - E:
    - invalid key will yield undefined

- remove
  - I: key
  - O: N/A
    - SE: nees to remove kv pair from hashTable
  - C: N/A
  - E:
    - does nothing if there is nothing to remove
    - half the storage limit when number of items is less than 0.25 of storage array

### Strategy / Pseudocode
- insert
  - increment items count
  - if the item count is greater than 0.75 of limit
    - then double the table
  - get new index for key
  - insert into table index and kv tuple

- retrieve
  - iterate through the table
    - at each bucket, iterate through all the tuples
      - if the tuple[0] matches the key, then return tuple[1]

- remove
  - decrement items count
  - if items is 0
    - reset the list
    - return the function
  - iterate through the table
    - at each bucket, iterate through all the tuples
      - if the tuple[0] matches the key
        - splice out tuple
        - break from loop
  - if items is less than 0.25 of the limit
    - half the table

- resize
  - accept a new limit
  - create a new table of length limit
    - every slot is an empty array
    - update the limit to new limit
  - iterate through the table
    - at each bucket, iterate through the tuples
      - insert the tuple into the new table
  - reassign the table to the new table
  - update the limit to the new limit

## <a href='./hashTableResizing.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```