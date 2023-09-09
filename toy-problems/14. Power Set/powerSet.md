# 14. Power Set

## About the Problem

Return an array with the power set of a given string.
Definition of power set: The set of all possible subsets including the empty set.

Note:
 1. All characters in a subset should be sorted.
 2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `powerSet("abc")` | `[ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]` |
| 2 | `powerSet("jump")` | `["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]` |

## <a href='./powerSet.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n)`
  - time complexity for creating letters is O(n^2)
    - splitting the string takes O(n)
    - creating a set is O(n)
  - creating sorted array from set is O(n)
  - creating sorted string is O(n^2 log n)
    - sorting has O(n log n) time complexity
    - joining has O(n) time complexity
  - iterating through the length of sorted is O(n)
    - recursive calls has n! time complexity
    - iterating through teh results of generatedpowerSet is O(n!)
  - overall time complexity is led by leading coeffient O(n^2 log n + 3n! + n) =>
 - Space Complexity: `O(n * n!)`
  - set size is dependent on teh size of str, so O(n)
  - recursive call deck is O(n!)

### Input, Output, Constraints, Edge (IOCE)

 - I: str (may contain duplicate letters)
 - O: string[] containing all powersets of the given string, including ""
 - C: all characters in a subset should be sorted (i.e. 'ab' instead of 'ba')
 - E:
  - string "" would yield [""]
  - "aabb" would yield ["", a, b, ab]

### Strategy
- Plan A (recursion):
  - base case: return array with empty string if string length is 0
  - sort the string
  - iterate through all the letters of the string
    - add each letter to a set to ensure that repeated leading letters are not present
    - at each letter, a set would consist of the current letter combined with the results of running the function through the latter portion of the string
  - return the result

### Pseudocode
- Plan A (recursion):
  - create a result array and set to an array with an empty string
  - if the string's length is 0, then return result
  - sort the string using the sort function
  - create a set of letters
  - iterate through the length of the string
    - if the letter exists in the set, then continue
    - else
      - add the letter to the set
      - push the current letter to the result array
      - run the current function for the section of the string immediately after the current index and use a for each function
        - for each substring, push the current letter + substring to the result array
  - return the result array

## <a href='./powerSet.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```