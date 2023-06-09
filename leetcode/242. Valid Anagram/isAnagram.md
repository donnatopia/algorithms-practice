# 242. Valid Anagram

## <a href='https://leetcode.com/problems/valid-anagram/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "anagram", t = "nagaram"` | `true` |
| 2 | `s = "rat", t = "car"` | `false` |

### Constraints:

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

## <a href='./isAnagram.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 67 ms | 93.35% |
| Memory | 44.5 MB | 52.30% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
  - the first for loop through s produces a time complexity of O(n), where n is the length of s. This is because every letter of s must be visited at least once
  - the second for loop through t produces a time complexity of O(n), where n is the length of t
  - sequential for loops add their time complexities
  - total time complexity is O(2n), which simplifies to O(n)
 - Space Complexity: `O(n)`
  - the dictionary object data structure size is dependent on the length of s, as the worse case scenario is every letter of s is unique

### Input, Output, Constraints, Edge (IOCE)

 - I: string (s) and string (t)
 - O: boolean if t is an anagram of s
 - C:
  - s and t consists of lowercase English letters
  - at least 1 character in length
 - E:
  - if s and t are the same word, this is an anagram

### Strategy
- check to see if the anagrams are the same length
  - if not, then not anagram
- create an object that stores all the letters of the word as the key and their respective frequency as the value
- iterate through the second word and delete letters from the dictionary as they come up
  - if nothing avaliable to delete
    - then it is not an anagram and return false
- if after the iteration there is anything left in the dictionary, then it is not an anagram => return false else return true

### Pseudocode
- return false if the length of s is not the length of t
- create an dictionary object
- iterate through the first word
  - for every letter, add the letter to the dictionary
  - if the letter already exists in the dictionary
    - increment the value
  - else
    - add the letter to the dictionary with the value of 1
- iterate through the second word
  - search for the letter in the dictionary
  - if it exists and the value is greater than 1
    - decrement the value
  - if it exists and the value is 1
    - delete the letter from the dictionary
  - if it doesn't exist
    - return false
- return if the dictionary object keys length is 0

### Notes
  - can sort s and t and then return if the sorted strings equal each other, but slower time complexity

## <a href='./isAnagram.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```