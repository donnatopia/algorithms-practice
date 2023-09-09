# 34. Sum Array

## About the Problem

Given an array of numbers, calculate the greatest contiguous sum of numbers in it.

A single array item will count as a contiguous sum.

Solved in O(n) time with O(1) memory

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `sumArray([1, 2, 3])` | `6` |
| 2 | `sumArray([1, 2, 3, -4])` | `6` |
| 3 | `sumArray([1, 2, 3, -4, 5])` | `7` |

## <a href='./sumArray.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n)`
  - for loop through the length of the array has linear time complexity
 - Space Complexity: `O(1)`
  - no additional data structures needed

### Input, Output, Constraints, Edge (IOCE)
 - I: number[]
 - O: number representing the greatest contigous sum of numbers
 - C:
 - E:
  - negative numbers present in the array

### Strategy / Pseudocode:
- Plan A (sliding window):
  - set maxSum to negative infinity to overset negative numbers
  - set the current sum to 0
  - iterate through all the numbers in number array
    - add the current number to the current sum
    - set the maxSum as the maximum between current and max
    - if the current sum is less than 0
      - then consider intervals starting at this point
      - throw out earlier progress
      - reset currentSum to 0
  - return maxSum

## <a href='./sumArray.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```