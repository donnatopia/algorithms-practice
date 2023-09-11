# 2. Even Occurrence

## About the Problem

Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return `null` if there are no even-occurrence items.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])` | `4` |
| 2 | `evenOccurrence([1, 2, 3, 4])` | `null` |

## <a href='./evenOccurrence.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(2n)`
    - iteration through the first loop is O(n)
    - iteration through the second loop is O(n)
    - congruent functions' time compleixties are additive
    - total time complexity is `O(2n)`
  - Space Complexity: `O(k)`
    - the leading data structure is the dict, whose size is dictated by the number of unique values in arr (k);

### Input, Output, Constraints, Edge (IOCE)

  - I: (string | number)[]
  - O: string | number
  - C: N/A
  - E:
    - no even occurrence => null
    - multiple even occurrences => return the first one
    - mixed array

### Strategy
- Plan A (use of a dictionary):
  - create a dictionary map (map vs. obj: map remembers the insertion order) => actually let's use obj instead
  - iterate through all the elements in the array
    - update the dictionary with the element as the key and the number of occurrence as the value
  - iterate through the dictionary map
    - return the key if its value is even
  - return null after loop


### Pseudocode
- Plan A (use of dictionary):
  - define dict as a new obj
  - iterate through all the variables of arr
    - if dict at the variable exists
      - then increment the count
    - else
      - set dict at the variable as 1
  - iterate through the length of the arr
    - if dict at the variable is even => return the variable
  - return null

## <a href='./evenOccurrence.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```