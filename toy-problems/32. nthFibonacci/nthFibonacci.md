# 32. Nth Fibonacci

## About the Problem

A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each subsequent number is the sum of the previous two.

For example, the first five Fibonacci numbers are:

  0 1 1 2 3

If n were 4, your function should return 3; for 5, it should return 5.

Write a function that accepts a number, n, and returns the nth Fibonacci number.

Use a recursive solution to this problem; if you finish with time left over, implement an iterative solution.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nthFibonacci(2)` | `1` |
| 2 | `nthFibonacci(3)` | `2` |
| 3 | `nthFibonacci(4)` | `4` |

## <a href='./nthFibonacci.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we itereate until num, so time is linear
  - Space Complexity: `O(1)`
    - no additional data structures, so space is constant

### Input, Output, Constraints, Edge (IOCE)

  - I: number
  - O: the nth number in the fibonacci sequence
  - C: N/A
  - E: 0 returns 0
    - negative = null

### Strategy
- Plan A (iterative):
  - set index as 1
  - set previous to 0
  - set current as 1
  - while the index is less than num
    - set sum as the sum of previous and current
    - set previous to current
    - set current to sum
    - increment the index
  - return current

## <a href='./nthFibonacci.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```