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

### Input, Output, Constraints, Edge (IOCE)

 - I: string containing various open and closed parentheses/brackets
 - O: boolean validating whether these parentheses are closed properly
 - C: N/A
 - E: empty string should be true
