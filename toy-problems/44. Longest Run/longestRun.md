# 44. Longest Run

## About the Problem

Write a function that, given a string, Finds the longest run of identical characters and returns an array containing the start and end indices of that run. If there are two runs of equal length, return the first one.

Try your function with long, random strings to make sure it handles large inputs well.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `longestRun("abbbcc")` | `[1, 3]` |
| 2 | `longestRun("aabbc")` | `[0, 1]` |
| 3 | `longestRun("abcd")` | `[0, 0]` |
| 4 | `longestRun("")` | `null` |

## <a href='longestRun.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we only interate through each character once in a linear manner
  - Space Complexity: `O(1)`
    - no additional data structures

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: tuple, where the first number is the start index of the longest run of identical characters and the last is the end index
  - C: N/A
  - E: empty string produces null
    - multiple instances of the longest run would return the range for the first instance

### Strategy / Pseudocode
- Plan A (two pointers):
  - if the string's length is 0, return null
  - set the variable for start to be 0
  - set the variable for end to be 0
  - set an interation variable, i
  - while i is less than the length of the string
    - set a variable for j and set to i
    - while the variable at j + 1 is equal to the variable at i
      - increment j
    - set the current length to j - i + 1
    - set the max length to end - start + 1
    - if the current length is greater than the max length
      - replace the end variable with j
      - replace the start variable with i
    - set i to j + 1;
  - return the tuple of start and end

## <a href='longestRun.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```