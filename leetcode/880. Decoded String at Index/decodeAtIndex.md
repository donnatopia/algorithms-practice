# 880. Decoded String at Index

## <a href='https://leetcode.com/problems/decoded-string-at-index/?envType=daily-question&envId=2023-09-27'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an encoded string `s`. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

- If the character read is a letter, that letter is written onto the tape.
- If the character read is a digit `d`, the entire current tape is repeatedly written `d - 1` more times in total.

Given an integer `k`, return the `kth` letter (1-indexed) in the decoded string.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "leet2code3", k = 10` | `"o"` |
| 2 | `s = "ha22", k = 5` | `"h"` |
| 3 | `s = "a2345678999999999999999", k = 1` | `"a"` |

### Constraints:

- `2 <= s.length <= 100`
- `s` consists of lowercase English letters and digits 2 through 9.
- `s` starts with a letter.
- `1 <= k <= 10^9`
- It is guaranteed that `k` is less than or equal to the length of the decoded string.
- The decoded string is guaranteed to have less than `2^63` letters.

## <a href='./decodeAtIndex.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

  - I:
  - O:
  - C:
  - E:

### Strategy
-

### Pseudocode
-

## <a href='./decodeAtIndex.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```