# 557. Reverse Words in a String III

## <a href='https://leetcode.com/problems/reverse-words-in-a-string-iii/?envType=daily-question&envId=2023-10-01'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "Let's take LeetCode contest"` | `"s'teL ekat edoCteeL tsetnoc"` |
| 2 | `s = "God Ding"` | `"doG gniD"` |

### Constraints:

- `1 <= s.length <= 5 * 10^4`
- `s` contains printable ASCII characters.
- `s` does not contain any leading or trailing spaces.
- There is at least one word in `s`.
- All the words in `s` are separated by a single space.

## <a href='./reverseWords.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 63 ms | 62.87% |
| Memory | 48.2 MB | 71.96% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we iterate through all the letters of the string exactly once, so time is linear
  - Space Complexity: `O(n)`
    - the words array is dependent on the number of words in s, so this is also linear

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: string with the order of each word reversed
  - C: N/A
  - E: empty string => empty string

### Strategy / Pseudocode
- Plan A (iterative):
  - split the string by words
  - iterate through all the words
    - create an empty reverse string
    - iterate through the length of the current word in reverse
      - add the current letter to the reverse string
    - replace the current word with the reverse string
  - return the words array joined by a singular white space

## <a href='./reverseWords.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```