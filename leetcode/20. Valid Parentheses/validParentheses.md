# 20. Valid Parentheses

## <a href='https://leetcode.com/problems/valid-parentheses/description/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:

 1. Open brackets must be closed by the same type of brackets.
 2. Open brackets must be closed in the correct order.
 3. Every close bracket has a corresponding open bracket of the same type.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "()"` | `true` |
| 2 | `s = "()[]{}"` | `true` |
| 3 | `s = "(]"` | `false` |

### Constraints:

- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.

## <a href='./validParentheses.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 64 ms | 62.84% |
| Memory | 42.8 MB | 33.48% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: string containing various open and closed parentheses/brackets
 - O: boolean validating whether these parentheses are closed properly
 - C: N/A
 - E: empty string should be true

### Strategy
- if it is an open parentheses, then add it to the stack
- if it is a closed parentheses, then check the stack to see if the next one out is the correct open parentheses
  - if it is correct, then pop off the valid open parentheses from the stack and proceed along the string
  - if it is incorrect, then return false
- return if the stack length is 0

### Pseudocode
- create an object that correlates the open and closed parentheses pairing
- create an empty stack
- iterate through the string
  - if the character is a variation of the open parentheses
    - then add to the stack
  - if the character is a variation of the closed parentheses
    - then check the stack for the corresponding open parentheses
    - if the last character of the stack matches the corresponding open parentheses
      - then pop off the last character
    - if it does not match
      - then return false
- return if the stack's length is 0

## <a href='./validParentheses.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```
