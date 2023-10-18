# 16. Deep Equality

## About the Problem

Write a function that, given two objects, returns whether or not the two
are deeply equivalent--meaning the structure of the two objects is the
same, and so is the structure of each of their corresponding descendants.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}` | `true` |
| 2 | `deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})` | `false` |

## <a href='./deepEquality.js'>About the Solution</a>

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

## <a href='./deepEquality.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```