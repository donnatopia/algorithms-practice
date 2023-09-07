# 35. Number To English

## About the Problem

Extend the Number prototype with a new method called `toEnglish`.
It should return the number as a string using English words.

### Extra Credit
Make your function support decimals.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `7` | `'seven'` |
| 2 | `575` | `'five hundred seventy-five'` |
| 3 | `78193512` | `'seventy-eight million one hundred ninety-three thousand five hundred twelve'`
| 4 | `150043.273` | `'one hundred fifty thousand forty-three and two hundred seventy three thousandths'` |

## <a href='./numberToEnglish.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(log 10 n)`
  - recursive calls to function occurs at log 10 of the size of n
 - Space Complexity: `O(log 10 n)`
  - recursion depth is dependent on size of n, which is reduced by 10 fold each run

### Input, Output, Constraints, Edge (IOCE)

 - I: n (number)
 - O: string representation of n
 - C: N/A
 - E: N/A

### Strategy / Pseudocode
- Plan A (iterative):
  - create a library of numbersToPlace
    - hundred
    - thousand
    - million
    - billion
  - create a libray of numbersToWords
    - one
    - two
    - ...
    - ten
    - eleven
    - ...
    - twenty
    - thirty
    - forty
    - ...
    - ninety
  - if value is empty
    - return empty string
  - if value is less than 20
    - return value from numbersToWords
  - if value is less than 100
    - divide the value by 10
    - pull value from numbersToWords
    - add to string value, '-', and function on remaining value
  - find the upper 10th value (i.e. thousand, hundred, tens, ones)
  - start from the upper 10th value
    - make sure number divided by place value is greater than 1
    - take the floor value of quotient and run it through function
    - add the value to the growing string with place word
    - subtract from the total with the string representation of number and run the value through function
  - return string

## <a href='./numberToEnglish.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```