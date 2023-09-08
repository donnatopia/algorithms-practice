# 13. All Anagrams

## About the Problem

Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.

## Extra Credit:

No repeated strings

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `abc` | `[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]` |
| 2 | `a` | `['a']` |

## <a href='./allAnagrams.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n * n!)`
  - iterating through the length of str has a time complexity of n
  - recursive call stacks for the remaining letters of word has a time complexity of n!
  - because the recursive call stacks are embedded into the initial iteration through the string, the overall time complexity is O(n * n!);
 - Space Complexity: `O(n! + n)`
  - the anagrams array is size dependent on the string. since it encompasses various letter combinations of str, the space complexity is n!
  - the letters set contains all unique letters in string, which can be the entire length of string, worse-case scenario, so the space complexity is n.
  - the overall space complexity for adjacent data structures is n! + n

### Input, Output, Constraints, Edge (IOCE)

 - I: string
 - O: string[] containing all anagrams (unique is extra credit)
 - C: no repeated strings
 - E:
  - '' => [''];
  - a => [a]
  - aa => [aa]

### Strategy
- Plan A:
  - base case is if there is only one letter in the array => return an array with just the letter
  - iterate through all the letters of the string
    - anagram is the current letter appended to the recursive call to allAnagrams of all the remaining letters
    - add the anagram to the anagrams array
  - return the anagram array

  - to account for unique letters, only run the allAnagrams function on remaining letters if that letter has never been visited
    - use a set to keep track of the letters

  - different strategy could be use an object for anagrams and add every anagram to the object
    - return the Object.keys of the object
    - con: runs the function unnecessarily though

### Pseudocode
- Plan A:
  - if the length of the array is 1
    - return an array with the string as its only element
  - define anagrams as an empty array
  - iterate through all the letters of the string
    - call the allAnagrams on the remaining letters of the string, which slices the string from 0 to the current index and current index + 1 to end, and use a forEach function
      - at each anagram fragment, push the current letter + the anagram fragment into the anagrams array
  - return anagrams

## <a href='./allAnagrams.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```