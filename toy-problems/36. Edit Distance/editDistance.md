# 25. Edit Distance

## About the Problem

Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `editDistance("cat", "cut")` | `1` |
| 2 | `editDistance("wednesday", "sunday")` | `5` |
| 3 | `editDistance("hackerrank", "hackreactor")` | `6` |


## <a href='./editDistance.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

 - I:
  - str1 (string)
  - str2 (string)
 - O:
  - number of edits it takes to convert str1 to str2
 - C: N/A
 - E:
  - if one string is empty, then the number of edits is the length of the other string

### Strategy
- Plan A (dp):
  - create a matrix m x n, where m is the length of str1 and n is the length of str2
    - each cell of the matrix indicates the number of edits it takes to convert str1 to str2 at their respective index
    - the answer would be the the last cell at m and n
  - basic principles
    - if one string is shorter than the other, the min edits is the difference between the two strings' lengths
    - the types of edits that can illustrated in the grid
      - change the letter in str1 to the same letter as str2 at the same index
      - insert a brand new letter
    - take the min of previous letter combinations and add 1 for the new grid member


### Pseudocode
- Plan A (dp):
  - set base cases
    - if str1's length is 0, then return the length of str2
    - if str2's length is 0, then return the length of str1
  - create the matrix with the dimensions str1 + 1 and str2 + 1
  - define the first row of the matrix as their index
  - define the first column of the matrix as their row index
  - iterate through the remaining cells of the matrix
    - if the value at the row and col index of their respective strings match
      - then assign the cell value as the same value as the major diagonal value
    - else
      - assign the cell value to the min value between the major diagonal, top, and left value + 1
  - return the value at the bottom right corner

## <a href='./editDistance.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```