# 2390. Removing Stars From a String

## <a href='https://leetcode.com/problems/removing-stars-from-a-string/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given a string s, which contains stars *.

In one operation, you can:

- Choose a star in s.
- Remove the closest non-star character to its left, as well as remove the star itself.

Return the string after all stars have been removed.

Note:

- The input will be generated such that the operation is always possible.
- It can be shown that the resulting string will always be unique.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "leet**cod*e"` | `"lecoe"` |
| 2 | `s = "erase*****"` | `""` |

### Constraints:

- `1 <= s.length <= 105`
- `s` consists of lowercase English letters and stars `*`.
- The operation above can be performed on `s`.

## <a href='./removeStars.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 107 ms | 32.34% |
| Memory | 57.1 MB | 32.34% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: string consisting of lowercase letters and stars
 - O: string with removed stars
 - C: none
 - E: empty string => empty string

### Strategy
- use a stack
- iterate through the string
  - if letter, then add to the stack
  - if star, then pop off the last character of the stack
- return the stack joined together as a string

### Pseudocode
- define a stack
- use a for loop to iterate through the string
  - if star
    - pop off the last character of the stack
  - else
    - add char to the stack
- return stack with join operation

## <a href='removeStars.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```