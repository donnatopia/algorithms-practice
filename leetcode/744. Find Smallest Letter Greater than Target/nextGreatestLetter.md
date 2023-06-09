# 744. Find Smallest Letter Greater than Target

## <a href='https://leetcode.com/problems/find-smallest-letter-greater-than-target/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an array of characters `letters` that is sorted in non-decreasing order, and a character `target`. There are at least two different characters in `letters`.

Return the smallest character in `letters` that is lexicographically greater than `target`. If such a character does not exist, return the first character in `letters`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `letters = ["c","f","j"], target = "a"` | `c` |
| 2 | `letters = ["c","f","j"], target = "c"` | `f` |
| 3 | `letters = ["x","x","y","y"], target = "z"` | `x` |

### Constraints:

- `2 <= letters.length <= 104`
- `letters[i]` is a lowercase English letter.
- `letters` is sorted in non-decreasing order.
- `letters` contains at least two different characters.
- `target` is a lowercase English letter.

## <a href='./nextGreatestLetter.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 67 ms | 34.79% |
| Memory | 44.6 MB | 15.48% |

### Time and Space Complexity
 - Time Complexity: `O(letters.length)`
 - Space Complexity: `O(1)`

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - character[] in lexographically increasing order
  - character (string) as target
 - O:
  - character (string) that is lexographically greater than target present in the letters array
  - if none present, return first character in the array
 - C:
  - at least 2 different characters in the array
  - they are all lowercase characters
 - E:
  - an array containing a lexographically lesser character and the same character as the target would return the lexographically lesser character (i.e. `letters = [a, b], target = b` => `a`) - same character is NOT lexographically greater

### Strategy
- brute force
  - create an array of all the letters in alphabet to get the index as the lexographic order using index of
  - find the order of the target
  - iterate through letters
    - find the order of the current letter relative to the alphabet array
    - if the current order is greater than the target
      - return the current letter
  - if after the iteration of the letters array nothing is returned, that means that none of the letters' orders are lexographically greater than the target
  - that means, i should return the first character of the letters array

### Pseudocode
- create an alphabet array
- define the index of the target as the targetOrder
- iterate through the entire letters array
  - define the index of the current letter as the currentOrder
  - if the currentOrder is greater than the targetOrder
    - then return the current letter
- return the first element of the letters array

## <a href='./nextGreatestLetter.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```