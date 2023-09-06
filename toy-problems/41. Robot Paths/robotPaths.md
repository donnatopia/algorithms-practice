# 41. Robot Paths

## About the Problem

A robot located at the top left corner of a 5x5 grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.
A Board class will be useful

### Examples
| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 1` | `1` |
| 2 | `n = 2` | `2` |
| 3 | `n = 3` | `12` |
| 4 | `n = 4` | `184` |


## <a href='./robotPaths.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(4^(n*n))`
  - each recursive call to the traverse function takes N*N time complexity as it explores all the possible paths from the current position
  - since we do this 4 times for each direction, the time complexity is 4<sup>n * n</sup>
 - Space Complexity: `O(n^2)`
  - the largest data structure is the board object, which has takes up n^2 space

### Input, Output, Constraints, Edge (IOCE)

 - I: n (number), size of the grid
 - O: number of unique ways a robot can traverse from the top left to bottom right without visiting hte same spot twice
 - C: N/A
 - E:
  - 1: 1

### Strategy
- Plan A
  - backtracking?
  - create a board of the n size
  - at every position, a robot can move either up, down, right, or left (as long as the slot is false in board constructor)
    - if all sides are true, then truncate that path
    - else toggle piece to new path and restart the same logic of checking if all sides have been visited (if it even exists)
    - once the piece has reached the bottom right corner, then increment number of paths
  - return number of paths

### Pseudocode
- Plan A
  - create a board of n size
  - set paths as 0;
  - create a function that traverses the board that takes in a position and a board
    - if the position is at the bottom right
      - increment paths
      - return the function
    - define the left position
    - define the right position
    - define the up position
    - define the down position
    - if the left position is in range and has not been visited
      - toggle the piece at the left position
      - recursively call the function to the left position
      - toggle the piece at the left position
    - if the right position is in range and has not been visited
      - toggle the piece at the right position
      - recursively call the function to the right position and the board
      - toggle the piece at the right position
    - repeat the same steps for the top and down positions
  - call the function at position 0, 0
  - return paths

## <a href='./robotPaths.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```