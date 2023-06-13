# 2352. Equal Row and Column Pairs

## <a href='https://leetcode.com/problems/equal-row-and-column-pairs/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a 0-indexed `n x n` integer matrix `grid`, return the number of pairs `(ri, cj)` such that row `ri` and column `cj` are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `grid = [[3,2,1],[1,7,6],[2,7,7]]` | 1 |
| 2 | `grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]` | `3` |

### Constraints:

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- `1 <= grid[i][j] <= 10^5`

## <a href='./equalPairs.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 143 ms | 46.47% |
| Memory | 47.1 MB | 93.5% |

### Time and Space Complexity
 - Time Complexity: `O(n^3)`
 - Space Complexity: `O(1)`

### Input, Output, Constraints, Edge (IOCE)

 - I: number[][]
 - O: number (number of equal row and column pairs)
 - C:
  - matrix has equal row and column length
  - max n is 200 and at least 1 length
 - E:
  - for a singular box matrix => result is 1

### Strategy
- stringify each column
- iterate down each row
  - stringify the row and strictly compare the row to each column
    - if equal then increment counter
- return the counter

### Pseudocode
- create counter variable
- iterate through each row
  - iterate through each column
    - if the stringify version of the row matches stringify version of the column
      - increment counter
- return counter

## <a href='./equalPairs.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```