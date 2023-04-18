# 1768. Merge Strings Alternately

## <a href='https://leetcode.com/problems/merge-strings-alternately/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `word1 = "abc", word2 = "pqr"` | `"apbqcr"` |
| 2 | `word1 = "ab", word2 = "pqrs"` | `"apbqrs"` |
| 3 | `word1 = "abcd", word2 = "pq"` | `"apbqcd"` |

### Constraints:

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist of lowercase English letters.

## <a href='./mergeAlternately.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 46 ms | 98% |
| Memory | 43.8 MB | 6.59% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: 2 strings of lowercase strings (word1 and word2)
 - O: merged alternate strings of word1 and word2
 - C: N/A
 - E: strings may not be the same length; extra characters should be tacked at the end

### Strategy
- add letters of word1 first and then add letters of word2
- return the constructed variable

### Pseudocode
- create a merged variable to be returned at the end of the function
- create an index variable
- use a while loop until the index reaches the maximum value of either the length of word1 or word2
  - add value at the index of word1 first if exists to merge variable
  - add value at the index of word2 next if exists to merge variable
  - increment the index
- return merged variable

## <a href='./mergeAlternately.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```