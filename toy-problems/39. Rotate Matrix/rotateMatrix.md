# 39. Rotate Matrix

## About the Problem

 Write a function that rotates a NxN matrix 90 degrees.

 A matrix, also called a 2-D array, is simply an array of arrays of values.

 Example 1x1 matrix:
   [ [1] ]

 Example 2x2 matrix:
  [ [1,2],
    [3,4] ]

 Important note:
   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
   the number of rows* and n is the number of columns*. So an [i][j] address in a matrix
   will be i places down, and j places over. This usually matches the way arrays are
   addressed in code, but keep in mind that it differs from use in geometry and computer
   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.

 Example rotation of a 4x4 matrix:

 var matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,'A','B','C'],
  ['D','E','F','G']
 ];
 matrix[0][0]; // 1
 matrix[3][2]; // 'F'

 var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 // rotatedMatrix is:
 [ ['D',9,5,1],
  ['E','A',6,2],
  ['F','B',7,3],
  ['G','C',8,4]
 ]
 rotatedMatrix[0][0]; // 'D'
 rotatedMatrix[3][2]; // 8

 ### Extra Credit

  - Make your function operate on rectangular matrices (MxN rather than NxN).
  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `[[1]]` | `[[1]]` |
| 2 | `[[1, 2], [3, 4]]` | `[[3, 1], [4, 2]]` |
| 3 | `[[1,2,3,4],[5,6,7,8],[9,'A','B','C'],['D','E','F','G']]` | `[['D',9,5,1],['E','A',6,2],['F','B',7,3],['G','C',8,4]]` |

## <a href='./rotateMatrix.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: matrix
 - O: matrix, rotated 90 degrees
 - C: N/A
 - E:
  - singular element would yield the same element

### Strategy
- Plan A (iterative):
  - create a new matrix
  - every row is the the reverse column elements at the same index

### Pseudocode
- define rotated as an empty array
- iterate from 0 to the length of a matrix row (col)
  - define row as an empty array
  - iterate from the length of the matrix to 0, decrementing (row)
    - add element at the iterative row and colum to row
  - push row to rotated array
- return rotated

## <a href='./rotateMatrix.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```