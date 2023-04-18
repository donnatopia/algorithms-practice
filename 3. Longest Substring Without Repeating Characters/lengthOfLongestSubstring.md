# 3. Longest Substring Without Repeating Characters

## <a href='https://leetcode.com/problems/longest-substring-without-repeating-characters/description/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string `s`, find the length of the longest
substring
 without repeating characters.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "abcabcbb"` | `3` |
| 2 | `s = "bbbbb"` | `1` |
| 3 | `"pwwkew"` | `3` |

### Constraints:

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

## <a href='./lengthOfLongestSubstring.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 96 ms | 49.94% |
| Memory | 47.4 MB | 55.21% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(min(n, m)), where m is the size of the character set`

### Input, Output, Constraints, Edge (IOCE)

 - I: string comprised of letters, digits, symbols, and spaces
 - O: number corresponding to the length of the longest substring without repeating characters
 - C: N/A
 - E:
  - empty string would return 0
  - all repeating characters returns 1
  - should be able to work with digits and symbols

### Strategy
- use sliding window
- right pointer extends until the condition is false
  - check if letter exists in mem object
  - add letter to mem object
- left pointer extends until the condition is true
  - remove letter from mem object
  - check if right pointer index value still exists in object
- use an object to store characters between the range of right and left pointer
- return the length

- what is the condition?
- letters are not repeated in the object
- difference between right and left pointer is less than max length

### Pseudocode
- create a variable max (number)
- create an set called mem
- create left pointer and set to 0
- create right pointer and set to 0

- iterate through the string use while loop
- while right pointer is less than string length
  - if the the value at right index doesn't exists in mem
    - add letter to the mem set
    - increment the right pointer
    - update the max length between the max and the difference between the right and left counter
  - else the value at the right counter exists in the mem
    - remove the value at the left counter from mem
    - increment the left counter
- return max

## <a href='./lengthOfLongestSubstring.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```