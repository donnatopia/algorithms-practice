# 1631. Path With Minimum Effort

## <a href='https://leetcode.com/problems/path-with-minimum-effort/?envType=daily-question&envId=2023-09-16'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are a hiker preparing for an upcoming hike. You are given `heights`, a 2D array of size `rows x columns`, where `heights[row][col]` represents the height of cell `(row, col)`. You are situated in the top-left cell, `(0, 0)`, and you hope to travel to the bottom-right cell, `(rows-1, columns-1)` (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `heights = [[1,2,2],[3,8,2],[5,3,5]]` | `2` |
| 2 | `heights = [[1,2,3],[3,8,4],[5,3,5]]` | `1` |
| 3 | `heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]` | `0` |

### Constraints:

- `rows == heights.length`
- `columns == heights[i].length`
- `1 <= rows, columns <= 100`
- `1 <= heights[i][j] <= 10^6`

## <a href='./minimumEffortPath.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 6207 ms | 5.32% |
| Memory | 79.62 MB | 13.83% |

### Time and Space Complexity
  - Time Complexity: `O(n * m * log(m * n))`
  - Space Complexity: `O(n * m)`

### Input, Output, Constraints, Edge (IOCE)

  - I: matrix of heights
  - O: smallest difference between two cells on the path from left to right
  - C: N/A
  - E:
    - singular matrix => 0

### Strategy
- Plan A (backtracking):
  - create a path from left to right
    - if the cell has reached the bottom right cell
      - then update if this is the minimum effort compared to all valid pathways
    - before considering using the next cell as part of the pathway, check to see if the difference between the current cell and next cell is less than or equal to the minimum effort
      - mark the cell as visited
      - traverse left
      - traverse right
      - traverse up
      - traverse down
    - else
      - truncate this path

### Pseudocode
- Plan A:
  - set minimumEffort to 0
  - create a matrix the same size of heights all set to false
  - create a traverse function that accepts i, j, matrix
    - mark the current value as visited
    - let currentMinEffort = positive infinity
    - if i === heights.length - 1 && j === heights[0].length
      - minimumEffort as the minimum between minimumEffort and currentMinEffort
    - check left if valid => within range and not visited
      - if absolute difference between value of current and left is less than or equal to current minimum effort
      - then traverse left with matrix copy
    - check right if valid
    - check up if valid
    - check down if valid
  - call the traverse function on 0, 0
  - return minimumEffort

## <a href='./minimumEffortPath.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```