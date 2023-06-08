# 1351. Count Negative Numbers in Sorted Matrix

## <a href='https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/' target='_blank'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a `m x n` matrix `grid` which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in `grid`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]` | `8` |
| 2 | `grid = [[3,2],[1,0]]` | `0` |

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `-100 <= grid[i][j] <= 100`

## <a href='./countNegatives.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' target='_blank'/>

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 66 ms | 46.94% |
| Memory | 44.2 MB | 58.6% |

### Time and Space Complexity
 - Time Complexity: `O(m + n)`
  - Time complexity is relies on 2 for loops:
    - Number of rows in the grid (m)
    - Number of elements in a row (n)
  - While there is a break clause in the inner for loop, worse case scenrio, all the elements in a grid are negative numbers and the function will iterate through the entire grid.
 - Space Complexity: `O(1)`
  - Memory storage is constant because the only information stored is the count variable, regardless of the size of the grid.

### Input, Output, Constraints, Edge (IOCE)
 - I: number[][]
  - matrix is sorted in decreasing order
 - O: number (number of negative numbers)
 - C: N/A
 - E: empty matrix = 0

### Strategy
- iterate through the rows of the matrix
- start from the end of the row
  - if the number is a negative, then increase count
  - if the number is not a negative, then move onto the next row
- return the count

### Pseudocode
- create a variable called count and set to 0
- create a for loop for each row of the grid (m)
  - create an interior loop for each element of the row (n) and start from the last element of the row
    - if the element is less than 0, increase the count
    - else break the loop
- return the count

## <a href='./countNegatives.test.js' target='_blank'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```