# 45. Prime Tester

## About the Problem

A prime number is a whole number that has no other divisors other than itself and 1.

Write a function that accepts a number and returns true if it's a prime number, false if it's not.

### Extra Credit

Write a function that generates a list of all prime numbers in a user-specified range (inclusive). If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling saucy, check out the Sieve of Atkin.)

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `2` | `true` |
| 2 | `1` | `false` |

## <a href='./primeTester.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(Math.sqrt(n))`
  - from the for loop
 - Space Complexity: `O(1)`
  - no data structures

### Input, Output, Constraints, Edge (IOCE)

 - I: n (number)
 - O: boolean if the number is a prime number
 - C: N/A
 - E:
  - 1 is not a prime number

### Strategy
- Plan A:
  - set base case that 1 is not a prime number
  - iterate from 2 to the half of the number
    - divide the input number by the iteration value
    - if the value is a whole number => return false
  - return true

### Pseudocode
- Plan A (iterative):
  - if input is less than 2, then return false
  - iterate from 2 to upper value of sqrt of the input number, inclusive
    - if the modulo 1 of the quotient of the input and iteration number is 0
      - return false
  - return true

## <a href='./primeTester.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```