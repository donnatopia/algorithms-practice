# 28. Largest Product of Three

## About the Problem

Write a function that finds the largest possible product of any three numbers from an array.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `largestProductOfThree([2, 1, 3, 7])` | `42` |

## <a href='./largestProductOfThree.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n log n)`
    - sorting takes n log n time
    - comparison is constant time
  - Space Complexity: `O(1)`
    - sorting is in place and no additional data structures, so space is constant

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: number, largest product between any three numbers in the array
  - C: N/A
  - E: negative numbers and 0s

### Strategy
- Plan A:
  - sort the array from largest to smallest
  - if the first three numbers are positive
    - then return the product of the first three numbers
  - if the first three numbers are negative or zero
    - then return the product of the first three numbers
  - if the first three numbers are a mix of positives and negative/zeros
    - a positive and two largest negatives
    - a positive and two zeroes
    - 2 positives and a zero
    - 2 positives and the smallest negative

### Pseudocode
- Plan A:
  - if array.length is less than 3, return null
  - sort the array from largest to smallest
  - if the third value is a positive
    - return the product of the first three elements
  - if the first element is a negative or zero and the third element is a negative or zero
    - return the product of the first three elements
  - else if the second element is a positive
    - return the produt of the first three elements
  - else
    - return the product of the first element and last two elements

  - since there are only two variations,
    - sort from largest to smallest
    - we can return the max between the multiplying
      - first three elements
      - first element and last two elements

## <a href='./largestProductOfThree.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```