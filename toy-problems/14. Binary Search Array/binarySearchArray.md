# 14. Binary Search Array

## About the Problem

Given a sorted array, find the index of an element using a binary search algorithm.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `binarySearch([1, 2, 3, 4, 5], 4)` | `3` |
| 2 | `binarySearch([1, 2, 3, 4, 5], 8)` | `null` |

## <a href='./binarySearchArray.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(log n)`
    - each time the search is cut 1/2 of the arr.length
  - Space Complexity: `O(1)`
    - no additional data structures needed

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - sorted array
    - target element
  - O:
    - index of target element
    - null otherwise
  - C: time complexity O(log n)
  - E:
    - return null if element does not exist in the array

### Strategy / Pseudocode
- Plan A (binary search):
  - set the left index as 0
  - set the right index as the last element of the array
  - while the left index is less than or equal to right
    - set the mid point as the floor value of the average between the left and right value
    - if the value at the midpoint is equal to the target
      - return the midpoint index
    - else if target is less than the value at the midpoint
      - set the right index as the midpoint - 1
    - else
      - set the left index as the midpoint + 1
  - return null

## <a href='./binarySearchArray.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```