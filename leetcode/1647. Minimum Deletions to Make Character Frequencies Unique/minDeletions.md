# 1647. Minimum Deletions to Make Character Frequencies Unique

## <a href='https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/?envType=daily-question&envId=2023-09-12'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

A string `s` is called good if there are no two different characters in `s` that have the same frequency.

Given a string `s`, return the minimum number of characters you need to delete to make `s` good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string `"aab"`, the frequency of `'a'` is `2`, while the frequency of `'b'` is `1`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "aab"` | `0` |
| 2 | `s = "aaabbbcc"` | `2` |
| 3 | `"ceabaacb"` | `2` |

### Constraints:

- `1 <= s.length <= 10^5`
- `s` contains only lowercase English letters.

## <a href='./minDeletions.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 135 ms | 76.74% |
| Memory | 46.49 MB | 91.86% |

### Time and Space Complexity
  - Time Complexity: `O(n + k^2)`
    - creating the dictionary has a time complexity of O(n);
    - iterating through frequencies has a time complexity of O(k), where k is the number of unique characters in s
      - if we completely delete a character, we restart the count, so the time complexity is O(k) for every same character frequencies
      - worse case is a long string of singularly distict characters 'abcdefghi'
      - the time complexity would be O(k^2)
    - congruent functions will add the time complexity, so total time complexity is O(n + k^2);
  - Space Complexity: `O(k)`
    - the size of dict and frequencies is dictated by the number of unique characters in string, which is O(k)

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: number
    - min deletion to make character frequencies unique
  - C: N/A
  - E:
    - all unique character frequences => return the same string
    - frequencies of 0 is ignored

### Strategy / Pseudocode
- feel like i could use dp, but not sure at the moment

- Plan A (brute force):
  - create a dictionary of all the character frequencies
  - get all the frequencies into an array
  - sort the array from largest to smallest
  - keep count of the number of deletions and set to 0
  - iterate through the sorted array
    - if the current number is the same as the next number,
      - then subtract 1 from the current number
      - increment counter
  - return deletions

## <a href='./minDeletions.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```