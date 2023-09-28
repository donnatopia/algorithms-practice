# 316. Remove Duplicate Letters

## <a href='https://leetcode.com/problems/remove-duplicate-letters/?envType=daily-question&envId=2023-09-26'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string `s`, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

A string `a` is lexicographically smaller than a string `b` if in the first position where `a` and `b` differ, string `a` has a letter that appears earlier in the alphabet than the corresponding letter in `b`.

If the first `min(a.length, b.length)` characters do not differ, then the shorter string is the lexicographically smaller one.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "bcabc"` | `"abc"` |
| 2 | `s = "cbacdcbc"` | `"acdb"` |

### Constraints:

- `1 <= s.length <= 10^4`
- `s` consists of lowercase English letters.

## <a href='./removeDuplicateLetters.js'>About the Solution</a>

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

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: string in the smallest lexicographical order without any duplicates
  - C: N/A
  - E: string with singular letter would return the singular letter

### Strategy / Pseudocode
- Plan A (failed):
  - create an dictionary object of all the unique letters in the string
  - get the keys of the dictionary object and sort its result
  - return the sorted keys of the dictionary object in string form

- Plan B:
  - keep a dictionary object of all the letters and their respective index
    - add the first letter of the string and its index
  - keep track of the position of the smallest lexicographical letter
    - set to the first letter of the string to start
  - iterate through the length of the string from 1 to end
    - if the letter doesn't exist in the dictionary object
      - add the letter/index to the dictionary
      - update the smallest lexicographic order letter
    - if the letter exists
      - if the index of the letter in the dictionary is less than the smallest lexographic index
        - then delete the current instance
      - else  if the index of the letter in the dictionary is greater than the smallest lexographic index
        - then delete at the index in the library
        - decrement the index
        - decrement the position of the smallest lexicographic letter
        - add the letter/index to the library
  - return the string

## <a href='./removeDuplicateLetters.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```