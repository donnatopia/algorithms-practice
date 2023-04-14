# 516. Longest Palindromic Subsequence

## <a href='https://leetcode.com/problems/longest-palindromic-subsequence/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string `s`, find the longest palindromic subsequence's length in `s`.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "bbbab"` | `4` |
| 2 | `s = "cbbd"` | `2` |

### Constraints:

- `1 <= s.length <= 1000`
- `s` consists only of lowercase English letters.

## <a href='./longestPalindromeSubseq.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 916 ms | 72.1 MB |
| Memory | 17.92% | 69.36% |

### Time and Space Complexity
 - Time Complexity: `O(n^2)`
 - Space Complexity: `O(n^2)`

### Input, Output, Constraints, Edge (IOCE)

 - I: string s of lowercase letters
 - O: number (length of the longest palindrome subsequence)
 - C: N/A
 - E: the shortest possible value is 1 because s is guaranteed to be at least one character

### Strategy
- dynamic programming
- create a matrix storing the longest palindrome subsequence from index i to index j
- base case is that a single letter has the palindromic subsequence length of 1
- use recurrence relation to fill in the rest of the matrix
- return the entry from index 0 to index s.length - 1

### Pseudocode
- create a matrix of s.length
- fill in the base case of the matrix for length 1 with 1
- fill in the remaining entries starting from length 2 until string length
  - if the first and last indices match
    - then add 2 to the value at diagonal left
  - else
    - then get the max value from the left and down value
- return the value at 0 and s.length - 1

## <a href='./longestPalindromeSubseq.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```

## Useful Links
[Longest Palindromic Subsequence by Tushar Roy](https://www.youtube.com/watch?v=_nCsPn7_OgI&ab_channel=TusharRoy-CodingMadeSimple)