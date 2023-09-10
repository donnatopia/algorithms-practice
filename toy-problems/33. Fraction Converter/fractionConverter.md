# 33. Fraction Converter

## About the Problem

Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.

Whole numbers and mixed fractions should be returned as irregular fractions

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `toFraction(0.5)` | `'1/2'` |
| 2 | `toFraction(3.0)` | `'3/1'` |
| 3 | `toFraction(2.5)` | `'5/2'` |

## <a href='./fractionConverter.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n)`
  - finding the gcd is the leading function, which would take linear time
 - Space Complexity: `O(1)`
  - there is no additional data structure

### Input, Output, Constraints, Edge (IOCE)

 - I: num (number in decimal form)
 - O: string of simplified fraction representation of the inputted num
 - C: N/A
 - E:
  - 0 would yield 0/1
  - negative numbers
  - whole numbers would be their value

### Strategy
- Plan A (iterative):
  - convert the number to its closest whole number form by moving the tenths place
    - keep track of how many times you move the number to the tenths place
  - the fraction representation is the closest whole number form / tenths place
  - now, i need to determine the simplified version of the number
  - get the greatest common denominator between the two numbers
  - divide the greatest whole number by the gcd
  - divide the tenths place by the gcd
  - return string representation of the numbers
    - consider if the number was negative => return with -
    - else return string representation

### Pseudocode
- Plan A (iterative):
  - set the varaible isNegative based on if num is less than 0
  - set the number to absolute value representation
  - set the numerator to num
  - set the denominator to 1
  - while the modulo product of num and denominator is less than 1 and greater than 0
    - multiply the numerator by 10
    - multiply the denominator by 10
  - get the greatest common denominator between the numerator and denominator
  - divide the numerator by gcd
  - divide the denominator by gcd
  - if isNegative
    - return "-" + numerator + "/" + denominator
  - else
    - return numerator + '/' + denominator

  - create a function to get the greatest common denominators between two numbers
    - iterate from smaller of the two numbers to the smaller of teh two numbers, decrementing
       - if modulo value of each number and the iteration value is 0
          - then return iteration value
    - return 1

## <a href='./fractionConverter.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```