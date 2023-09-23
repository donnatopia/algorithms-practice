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

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 140 ms | 56.36% |
| Memory | 63.40 MB | 25.45% |

### Time and Space Complexity
  - Time Complexity: `O(n * m)`
    - we iterate through all the words in the array as well as all the length of each word
    - so n is the length of the word array and m is the average length of each word
  - Space Complexity: `O(n)`
    - we store the dp of each word, so the space is dependent on the size of words

### Input, Output, Constraints, Edge (IOCE)

  - I: string[]
  - O: return the longest possible word chain
  - C: N/A
  - E: only one word in words => return 1

### Strategy
- Plan A (brute force)
  - sort the words by length and sort into an object where the key is the length and the value is an array of words that are of that length
  - keep track of the shortest length
  - keep track of the longest length
  - set the longest chain length to 1

  - iterate from the shortest length to the longest length
    - keep track of current chain length and set to 1
    - iterate from the shortest + 1 to the longest
    - keep track of the current word
      - if the shortest + 1 does not exist, break
      - iterate through all the values of shortest + 1
        - check if the current word is a predecessor of next word with helper function
          - increment current chain length
          - set current word to the shortest + 1
        - else
          - continue to the next value
  - return the longest chain length

- Plan B: dp

### Pseudocode
- Plan B:
  - if there is only 1 word then, return 1
  - sort the words by length
  - create an empty dp object
  - keep track of longest chain

  - iterate through all the words
    - set the dp for the word as 1
    - iterate through all the letters of the current word
      - remove the current letter from the current word
      - if the modified word is in the dp
        - then set the dp for the word as the max value between its current value and the dp at the modified word + 1
    - set the longest chain length as the max value of either the dp of the word or the current max value

  - return longest chain

## <a href='./longestStrChain.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```