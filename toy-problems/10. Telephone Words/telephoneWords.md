# 10. Telephone Words

## About the Problem

Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

Tips:
  - Phone numbers are strings! (A phone number can start with a zero.)
  - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  - Don't return every combination of those digits in any order, just the order given.

### Extra Credit
There's a list of English dictionary words at /usr/share/dict/words .
Why not filter your results to only return words contained in that file?

### Examples

telephoneWords('2745');
  ['APGJ',
   'APGK',
   'APGL',
   ..., // many many more of these
   'CSIL']

## <a href='./telephoneWords.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(3^n)`
    - iterating through all the different permutation is on average 3^n
  - Space Complexity: `O(n + 3^n)`
    - the number of recursive calls depends on the length of digitStr (n)
    - all the permuations are stored in words, which is 3^n


### Input, Output, Constraints, Edge (IOCE)

  - I: string of digits
  - O: array of strings of all permutations of digits into letters
  - C: N/A
  - E:
    - 0 and 1 are returned as 0 and 1

### Strategy
- Plan A (recursion):
  - base case
    - if the string is empty return an empty array
  - take the first digit of the string and find its corresponding array of letters
  - return the map values of the first digit permutations and recursively calling the function on the remaining portion of the string

### Pseudocode
- Plan A (recursion/ permuations):
  - if the digitString's length is 0, then return an empty array
  - retrieve the letters for the first digit and convert it into an array
  - generate the remaining letters as calling the function digitStr.substring(1);
  - iterate through all the letters
    - iterate through all the remaining letters
      - push the letter + remainingletters into result array
  - return result array

## <a href='./telephoneWords.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```