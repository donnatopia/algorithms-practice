# 38. Spiral Traversal

## About the Problem

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),and prints out every value found, but in a spiral from the upper left in to the center

Example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `spiralTraversal([[1,2,3],[4,5,6], [7,8,9]])` | `[1, 2, 3, 6, 9, 8, 7, 4, 5]` |

## <a href='./spiralTraversal.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(m x n)`
  - every element gets visited exactly once, so the time complexity is proportional to the number of elements
 - Space Complexity: `O(m x n)`
  - the returning matrix is the exact size of the input matrix
  - since we are building the returning array within the function, the space complexity is proportional to the number of elements

### Input, Output, Constraints, Edge (IOCE)

 - I: matrix (number[][])
 - O: array (number[]) of spiral order
 - C: N/A
 - E: N/A

### Strategy
- Plan A:
  - define an array to return
  - while the first row is less than the last row and the first column is less than the last row
  - push all the elements in the first row
    - define the firstrow as the next row minus the first and last element
  - get all the elements in the last column
    - define last column as the second to last column minus the first and last element
  - get all the elements in the last row and push them in reverse order
    - define last row as the second to last row minus the first and last element
  - get all the lements in the first column
    - define first column as the next column minus the first and last element
  - return the array


### Pseudocode
- Plan A:
  - define a result array as an empty array
  - define a function called getRow that accepts rowIndex, startIndex, and endIndex
    - if the startIndex is less than the endIndex
      - add to the array the elements in the rowIndex in ascending order using a for loop
    - else
      - add to the array the elements in the rowIndex in descending oder using a for loop
  - define a function called getColumn that accepts colIndex, startIndex, and endIndex
    - if the startIndex is less than the endIndex
      - add to the array the elements in the colIndex in ascending order using a for loop
    - else
      - add to the array the elements in the colIndex in descending order using a for loop
  - define firstRowIndex to be 0
  - define lastColIndex to be matrix[0].length - 1
  - define lastRowIndex to be matrix.length - 1
  - define firstColIndex to be 0
  - while the firstRowIndex is less than or equal to lastRowIndex && firstColIndex is less than or equal to lastColIndex
    - use getRow for firstRowIndex, firstColIndex, and lastColIndex
    - use getCol for lastColIndex, firstRowIndex + 1, and lastRowIndex - 1
    - use getRow for lastRowIndex, lastColIndex, and firstColIndex
    - use getCol for firstColIndex, lastRowIndex - 1, and first RowIndex + 1
    - increment firstRowIndex
    - increment firstColIndex
    - decrement lastColIndex
    - decrement lastRowIndex
  - return result array

## <a href='./spiralTraversal.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```