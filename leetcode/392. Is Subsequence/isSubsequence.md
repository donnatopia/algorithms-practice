# 392. Is Subsequence

## <a href='https://leetcode.com/problems/is-subsequence/?envType=daily-question&envId=2023-09-22'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "abc", t = "ahbgdc"` | `true` |
| 2 | `s = "axc", t = "ahbgdc"` | `false` |

Follow up: Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10**9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

### Constraints:

- `0 <= s.length <= 100`
- `0 <= t.length <= 10^4`
- `s` and `t` consist only of lowercase English letters.

## <a href='./isSubsequence.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 49 ms | 79.57% |
| Memory | 41.74 MB | 73.10% |

### Time and Space Complexity
  - Time Complexity: `O(n * m)`
    - with two pointers, we iterate through the length of both s and t
  - Space Complexity: `O(1)`
    - no additional data structures needed

### Input, Output, Constraints, Edge (IOCE)

  - I: 2 strings
  - O: boolean if first string is a subsequence of second string
  - C: N/A
  - E: if s is empty string => return true?

### Strategy
- Plan A (two pointers):
  - one pointer keeps track of string 1
  - second pointer keeps track of string 2
  - while pointer 2 is less than the length of string 2 && pointer 1 is less than str1.length
    - if the character matches the character at string1's index, then increment pointer for string 1
    - increment pointer 2
  - return if pointer 1 is less than str1.length

### Pseudocode
-

## <a href='./isSubsequence.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```