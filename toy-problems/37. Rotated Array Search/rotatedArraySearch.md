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

### Time and Space Complexity
 - Time Complexity: `O(log n)`
  - binary search has a time complexity of log n because each instance the search window is cut in half
 - Space Complexity: `O(1)`
  - all stored variables has constant space storage regardless of array size

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - number[]: represents an array of numbers that are sorted but rotated at a random pivot point
  - number: target to locate within the given array
 - O:
  - index of the target or null if not present
 - C:
  - complete in log(n) time, so need to use binary search
 - E:
  - no duplicates present
  - empty array returns null

### Strategy / Pseudocode
- Plan A (modified binary search):
  - define a left pointer and set to 0
  - define a right pointer and set to the length of the array - 1
  - while the left is less than or equal to the right pointer
    - check to see if value at mid is equal to the target
      - return index
    - check to see if valid range, i.e. value at left is less than the value at right
      - if the value at mid is less than target
        - set left to mid + 1
      - else
        - set right to mid - 1
    - else
      - if the value at mid is less than target
        - set left to mid + 1
      - else
        - set right to mid - 1
  - return null

## <a href='./rotatedArraySearch.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```