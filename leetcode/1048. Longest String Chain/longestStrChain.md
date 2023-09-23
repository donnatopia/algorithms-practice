# 1048. Longest String Chain

## <a href='https://leetcode.com/problems/longest-string-chain/?envType=daily-question&envId=2023-09-23'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an array of `words` where each word consists of lowercase English letters.

`wordA` is a predecessor of `wordB` if and only if we can insert exactly one letter anywhere in `wordA` without changing the order of the other characters to make it equal to `wordB`.

- For example, `"abc"` is a predecessor of `"abac"`, while `"cba"` is not a predecessor of `"bcad"`.

A word chain is a sequence of words `[word1, word2, ..., wordk]` with `k >= 1`, where `word1` is a predecessor of `word2`, `word2` is a predecessor of `word3`, and so on. A single word is trivially a word chain with `k == 1`.

Return the length of the longest possible word chain with words chosen from the given list of `words`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `words = ["a","b","ba","bca","bda","bdca"` | `4` |
| 2 | `words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]` | `5` |
| 3 | `words = ["abcd","dbqca"]` | `1` |

### Constraints:

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 16`
- `words[i]` only consists of lowercase English letters.

## <a href='./longestStrChain.js'>About the Solution</a>

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

## <a href='./longestStrChain.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```