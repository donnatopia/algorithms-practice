# 37. Rotated Array Search

## About the Problem

Given a sorted array that has been rotated some number of items right or
left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
how can you efficiently find an element? For simplicity, you can assume
that there are no duplicate elements in the array.

rotatedArraySearch should return the index of the element if it is in the
array and should return null otherwise.

Target time complexity: O(log(array.length))

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)` | `5` |
| 2 | `rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)` | `null` |

## <a href='./rotatedArraySearch.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

 - I:
 - O:
 - C:
 - E:

### Strategy
-

### Pseudocode
-

## <a href='./rotatedArraySearch.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```