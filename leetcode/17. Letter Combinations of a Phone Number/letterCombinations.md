# 17. Letter Combinations of a Phone Number

## <a href='https://leetcode.com/problems/letter-combinations-of-a-phone-number/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `digits = "23"` | `["ad","ae","af","bd","be","bf","cd","ce","cf"]` |
| 2 | `digits = ""` | `[]` |
| 3 | `digits = "2"` | `["a","b","c"]` |

### Constraints:

- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

## <a href='./letterCombinations.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 50 ms | 80.07% |
| Memory | 41.58 MB | 87.98% |

### Time and Space Complexity
 - Time Complexity: `O(4^n)`
  - each iteration of a digit letters array is about 3 or 4, which will occur for every letter in the digits array
  - thus, the tiem complexity is O(4^n)
 - Space Complexity: `O(4^n)`
  - the space complexity is contigent to the number of possible combinations for the digits array
  - if each letter has up to 4 possible letters combinations, then the space complexity is exponential depending the leters presented in the string

### Input, Output, Constraints, Edge (IOCE)

 - I: string of integers or empty string
 - O:
  - array of string representations of number to letter translations (all possible)
 - C: N/A
 - E:
  - empty string would result in an empty string

### Strategy
- Plan A:
  - create a library object where the key is the number in string representation and an array of letters as the value
  - create a variable to return
  - iterate through the length of the digits string
    - create an empty string
    - iterate through the array associated with the current number
      - add the letter to the current string
      - determine the remaining string arrays by recalling the function
      - for each of the remaining string arrays
        - push into the result array the current letter and the remaining string array
      - if empty array
        - push the current letter as a singular string
  - return result


### Pseudocode
- Plan A:
  - create a library, where the key is the number and the letters are the in the form of an array
  - define an empty array called combos
  - set a base case for if digits.length === 1
    - return the array in the library for the first digit in the digits array
  - if the digits has more than 1 character
    - define all the letters for the first letter in the digits string
    - for each of the letters that correspond to the first letter in the digits string
      - define the remaining combos as running the function against the rest of the digits string
      - for each of the remaining combos
        - push the current letter and the remaining combo to the combos array
  - return combos

## <a href='./letterCombinations.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```