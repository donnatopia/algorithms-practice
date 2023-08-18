# 542. 01 Matrix

## <a href='https://leetcode.com/problems/01-matrix/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an `m x n` binary matrix `mat`, return the distance of the nearest `0` for each cell.

The distance between two adjacent cells is `1`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `[[0,0,0],[0,1,0],[0,0,0]]` | `[[0,0,0],[0,1,0],[0,0,0]]` |
| 2 | `mat = [[0,0,0],[0,1,0],[1,1,1]]` | `[[0,0,0],[0,1,0],[1,2,1]]` |

### Constraints:

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10^4`
- `1 <= m * n <= 10^4`
- `mat[i][j]` is either `0` or `1`.
- There is at least one `0` in `mat`.

## <a href='./updateMatrix.js'>About the Solution</a>

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
    - binary matrix (number[][])
  - O:
    - binary matrix (number[][]) corresponding to the distance from the nearest 0
  - C:
    - there is at least one 0 in the matrix
  - E: N/A

### Strategy
- Plan A (DP):
  - iterate through all the variables in the matrix
  - if the variable is a 0
    - then return 0
  - else if the variable is 1
    - then return 1 + the minimum dp of the elements up, down, left, and right of the variable
  - store the answer in dp
  - return the entire dp structure

- Plan B:
  - given the coordinates of the matrix
    - return the position at the matrix

### Pseudocode
- Plan A (DP):
  - create a dp of the same size as the matrix and set all the variables to undefined
  - create a function to get the dp given coordinates
    - if the coordinates are out of range,
      - return Number.POSITIVE_INFINITY;

    - if the coordinates exist in the dp and does not equal undefined
      - return dp at the coordinates

    - if element is 0 at the given position
      - store the variable into the dp
      - return 0

    - set the element left of the coordinate as recalling the function at dp[i][j - 1] + 1;
    - set the element right of the coordinate as recalling the function at dp[i][j + 1] + 1;
    - set the element above the coordiante as recalling the function at dp[i - 1][j] + 1;
    - set the element below the coordinate as recalling the function at dp[i + 1][j] + 1;

    - store the minimum value into the dp
    - return the minimum value of the left, right, top, and bottom;

  - iterate through each row of the matrix
    - iterate through each element of the row
      - set each coordinate

  - return the dp structure

## <a href='./updateMatrix.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```