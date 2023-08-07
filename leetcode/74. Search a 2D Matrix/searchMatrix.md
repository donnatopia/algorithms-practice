# 74. Search a 2D Matrix

## <a href='https://leetcode.com/problems/search-a-2d-matrix/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.

You must write a solution in `O(log(m * n))` time complexity.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3` | `true` |
| 2 | `matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13` | `false` |

### Constraints:

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## <a href='./searchMatrix.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 48 ms | 92.56% |
| Memory | 42.38 MB | 28.48% |

### Time and Space Complexity
 - Time Complexity: `O(m log n)`
  - iterating through each row has a time complexity of m (matrix.length)
  - binary search through one row has a time complexity of log(n)
  - total time complexity is mlog(n)
 - Space Complexity: `O(n)`
  - regardless of matrix size, there requires memory for the currentRowIndex, left, right
  - the variable currentRow is dependent on the size of n, which is matrix[0].length

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - matrix (number[][]), where each row is in ascending order
  - target, a number that MAY or MAY NOT be in the matrix
 - O:
  - boolean that indicates if the target is in the matrix
 - C:
  - soln must run in O(log(m * n)) time complexity
 - E:
  - duplicates present in the matrix?

### Strategy
- Plan A
  - binary search since the time complexity is logorithmic
  - search through the matrix
  - set the left pointer at the first index of each row
  - set the right pointer at the last index of each row
  - if the target value is less than the value at the right pointer
    - then do a binary search on the current row
      - if the target is found, then return true
      - if the target is not found, then return false
  - else if the target value is greater than the value at the right pointer
    - reset the pointers so the left pointer is at the first index of the next row and the right pointer is at the last index of the next row
    - reset the loop which checks for if the target value is less than the value at the right pointer
  - this would probably require a while loop with conditionals
    - the current row index must be within range
    - the right pointer is greater than the left pointer (this must be the conditional for the binary search)

### Pseudocode
- Plan A
  - define a variable for the currentRowIndex and set to 0
  - define a variable for left pointer and set to 0
  - define a variable for right pointer and set to the length of the row in the matrix at the currentRowIndex - 1
  - while the currentRowIndex is less than the length of the matrix
    - if the value at the right pointer of the currentRowIndex is greater than the target value
      - while the right pointer is greater than the left pointer
        - define the midpointIndex as the average between the left and right pointer
        - if the value at the currentRowIndex and midpointIndex is less than the target
          - redefine the left pointer as the midpointIndex + 1
        - else if the value is greater than the target
          - redefine the right pointer as the midpointIndex - 1
        - else if the value is equal to the target
          - return true
      - after the while loop, return false
    - else if the value is equal to the target value
      - return true
    - else
      - increment the currentRowIndex
  - return false

## <a href='./searchMatrix.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```