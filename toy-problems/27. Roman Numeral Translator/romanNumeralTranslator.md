# 27. Roman Numeral Translator

## About the Problem

Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

You should return `null` if the input is not a string. You can expect all non-empty string inputs to be valid roman numerals.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `translateRomanNumeral("LX")` | `60` |
| 2 | `translateRomanNumeral("IV")` | `4` |

## <a href='./romanNumeralTranslator.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we iterate through each character exactly once, so time is linear
  - Space Complexity: `O(1)`
    - there are no additional data structures

### Input, Output, Constraints, Edge (IOCE)

  - I: string
  - O: number representation of string
  - C: N/A
  - E: empty string is 0

### Strategy
- Plan A:
  - if input type is not string => return null
  - set value to 0;
  - set previous to 0;
  - iterate from right to left
    - get the digit representation of current character
    - if the digit representation of the next value is less than the current digit representation
      - add digit representation of current character minus next
      - increment index
    - else add the current digit to teh value
  - return value

### Pseudocode
-

## <a href='./romanNumeralTranslator.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```