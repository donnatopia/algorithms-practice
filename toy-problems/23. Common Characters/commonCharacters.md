# 23. Common Characters

## About the Problem

Write a function `f(a, b)` which takes two strings as arguments and returns a string containing the characters found in both strings (without duplication), in the order that they appeared in `a`.

Remember to skip spaces and characters you have already encountered!

### Extra Credit:

Extend your function to handle more than two input strings.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `commonCharacters('acexivou', 'aegihobu')` | `'aeiou'` |

## <a href='./commonCharacters.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(m * p)`
    - iteration through the length of otherStrs has a time complexity of O(m), where m is the length of otherStrs
    - interally iteration of each letter of each word is linear with respect to the length of each word with is O(p), where p is the length of the longest word in otherStrs
    - iteration thorugh the length of str is linear with respect to the length of str1
    - the dominating function is the creation of the letters object, which is O(m * p), where m is the length of arguments and p is the average length of each argument
  - Space Complexity: `O(m * p)`
    - the dominating data structure is letters which stores every unique letter present in all the arguments
    - thus, the space complexity is O(m * p), where m is the length of arguments and p is the average length of each argument

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - str1
    - str2
  - O:
    - string that represents common characters present in both str1 and str2 in the order of str1
  - C:
    - no duplicate letters
  - E:
    - empty string for either str1 or str2 would yield empty string

### Strategy
- Plan A:
  - create an object consisting of the letters of str2 and set value to 1
  - iterate for the length of str1
    - if the letter from str1 is present in the set and there are no duplicates
      - push the letter into string
  - return the string

### Pseudocode
- set commonString to empty string
- set letters as an object
- iterate through the length of str2
  - set the letters with the key of the letter to 1
- iterate through the length of str1
  - if letters at the letter key is equal to the length of the remaining arguments
    - push the letter into common string
- return common string

### Notes
- consider using the reduce function

## <a href='commonCharacters.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```