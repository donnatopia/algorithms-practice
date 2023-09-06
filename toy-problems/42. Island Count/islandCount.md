# 42. Island Count

## About the Problem

Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

.0...
.00..
....0

[ [0, 1, 0, 0, 0]
  [0, 1, 1, 0, 0]
  [0, 0, 0, 0, 1] ]

..000.\n..000.\n..000.\n.0....\n..000.

[0, 0, 1, 1, 1, 0]
[0, 0, 1, 1, 1, 0]
[0, 0, 1, 1, 1, 0]
[0, 1, 0, 0, 0, 0]
[0, 0, 1, 1, 1, 0]

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `'.0...\n.00..\n....0'` | `2` |
| 2 | `'..000.\n..000.\n..000.\n.0....\n..000.'` | `3` |
| 3 | `'..000.\n..0...\n..0.0.\n..0...\n..000.'` | `2` |

## <a href='./islandCount.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n^2)`
  - create the matrix has O(n^2) time complexity for creating the matrix, where n represents the dimensions of the matrix
  - the iteration through the matrix is also O(n^2) time complexity
  - adjacent functions would result in O(n^2) overall time complexity
 - Space Complexity: `O(n^2)`
  - creation of the matrix is O(n^2) space complexity

### Input, Output, Constraints, Edge (IOCE)

 - I: mapStr (string), consisting of 0, ., and \n
 - O:
  - number of islands in map string
 - C: N/A
 - E:
  - singular 0 => 1
  - singular . => 0

### Strategy
- Plan A:
  - convert the string to a matrix
    - . is 0
    - 0 is 1
    - \n is the break for the new row
  - iterate through the matrix
    - if we see an island
      - check to see if the top or left is also land
      - if not, then increment the counter
  - return the counter

- Plan B:
  - convert to matrix
  - use dfs to mark land masses as seen
    - if the position is out of range
      - return the function
    - if position is land
      - mark it as visited (turn it into sea)
      - explore left, right, top, and bottom to mark off adjacent land pieces
  - iterate through the matrix
    - if the value is a land mass
      - then increment the counter
      - perform dfs on the position to mark off all the adjacent land pieces
  - return the counter

### Pseudocode
- Plan A:
  - set matrix to an empty array
  - set rows as the mapStr split based on the newline break
  - iterate through rows
    - set row as an empty array
    - if the element is a period, then push a 0 to array
    - else if the element is a 0, then push a 1 to array
    - push row into matrix
  - set counter to 0
  - iterate through each row in the matrix
    - iterate through each column in the matrix
      - if the current element is 1 AND top/left are both either out of bound or 0
        - increment counter
  - return counter

- Plan B:
  - set matrix to an empty array
  - set rows as the mapStr split based on the newline break
  - iterate through rows
    - set row as an empty array
    - if the element is a period, then push a 0 to array
    - else if the element is a 0, then push a 1 to array
    - push row into matrix
  - set counter to 0
  - define dfs function that accepts matrix position
    - if the matrix position is out of range
      - return the function
    - if position is 1
      - change it to 0
      - recursively call dfs for the left position
      - recursively call dfs for the right position
      - recursively call dfs for the up position
      - recursively call dfs for the down position
  - iterate through each row in the matrix
    - iterate through each column in the matrix
      - if the current element is 1
        - increment the counter
        - call dfs at the position
  - return counter

## <a href='./islandCount.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```