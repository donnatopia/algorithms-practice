# 30. Integer Reverse

## About the Problem

Given a positive integer, return its digits reversed.

- DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
- Only use integers and math in your solution.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `1234` | `4321` |

## <a href='integerReverse.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(log n)`
    - finding largest power of 10: log(n)
    - reversing integer: log(n)
  - Space Complexity: `O(1)`
    - no additional data structures

### Input, Output, Constraints, Edge (IOCE)

  - I: number
  - O: number with integer reversed
  - C: do not convert to string or array, only use math
  - E:
    - 0 => 0
    - 10 => 1
    - 510 => 15

### Strategy
- Plan A:
  - get the highest 10 denomination of the number
  - set remainder to the number
  - iterate down from the highest 10 denomination to the lowest while the remainder is greater than 0
    - get the floor value after dividing the number with the 10 denomination
    - add the floor value to the result value
    - subtract the floor value from the remainder
  - return the result value

### Pseudocode
- Plan A:
  - set denomination to 1
  - while the number divided by the denomination is greater than 1
    - multiply the denomination by 10
  - set remainder to number
  - set result to 0
  - while the remainder is greater than 0
    - define the value by taking the floor value of the remainder divided by the denomination
    - add the value to the result
    - subtract the value times the denomination from the remainder
    - divide the denomination by 10
  - return result

## <a href='integerReverse.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```