# 9. Nonrepeated Character

## About the Problem

Given an arbitrary input string, return the first nonrepeated character in
the string.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `firstNonRepeatedCharacter('ABA')` | `'B'` |
| 2 | `firstNonRepeatedCharacter('AACBDB')` | `'C'` |

## <a href='./nonrepeatedCharacter.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iterating through the length of the string is the leading function so time is linear
  - Space Complexity: `O(n)`
    - freq and characterIndices stores all unique characters in string, which is n at the worst case

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: string | null (first nonrepeated character in a string)
  - C: N/A
  - E:
    - no nonrepeated character => null
    - empty string => null

### Strategy / Pseudocode
- Plan A:
  - create an obj of unique characters and character frequencies
  - iterate through the length of the string
    - update the obj of character frequency
  - iterate through the keys of the obj
    - if the value is 1, then return the key
  - return null

## <a href='./nonrepeatedCharacter.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```