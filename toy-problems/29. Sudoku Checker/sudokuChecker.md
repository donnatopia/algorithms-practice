# 29. Sudoku Checker

## About the Problem

Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

### Examples

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"

## <a href='./sudokuChecker.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - transforming the string to a matrix is linear in time
    - checking each row is linear
    - checking each column is linear
    - checking each box is linear
    - overall the time complexity is linear
  - Space Complexity: `O(n)`
    - we store the board, which is dependent on the size of the matrix
    - each individual temporary array is always size 9, so this is constant.
    - overall space is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: 'solved' for valid board and 'invalid' for invalid boards
  - C: N/A
  - E: N/A

### Strategy
- Plan A:
  - convert the string to a matrix
  - return 'invalid' if fail any of the checks
  - check to see if each row contains 1 - 9
  - check to see if each col contains 1 - 9
  - check to see if each box contains 1 - 9
  - return 'solved' if pass each check

  - how to check if each section contains 1 - 9, check to see if the sum of all the elements add up to 45

### Pseudocode
- Plan A:
  - convert the string to a matrix
    - split the strings by the '\n'
    - convert each string row to a number array
  - iterate through each row
    - reduce the array to the sum of all its parts
    - if the reduced value does not equal 45 => return invalid
  - itereate through each column
    - add up all the elements in the column
    - if the value does not equal 45 => return invalid
  - iterate through the top left of each box
    - add up all the elments in a box
    - if the value does not equal 45 => return invalid
  - return 'solved'

## <a href='./sudokuChecker.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```