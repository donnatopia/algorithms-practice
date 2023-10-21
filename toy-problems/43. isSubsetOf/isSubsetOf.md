# 43. Is Subset Of

## About the Problem

Make an array method that can return whether or not a context array is a subset of an input array.  To simplify the problem, you can assume that neither array will contain objects or arrays as elements within them.

NOTE: You should disregard duplicates in the set.

See http://en.wikipedia.org/wiki/Subset for more on the definition of a
subset.

Extra Credit: Make the method work for arrays that contain objects and/or arrays as elements.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `isSubsetOf(['commit','push'], ['commit','rebase','push','blame'])` | `true` |
| 2 | `isSubsetOf(['merge','reset','reset'], ['reset','merge','add','commit'])` | `true` |

## <a href='isSubsetOf.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(m + n)`
    - we iterate through all of parents and add to the set, so this is linear with respect to length of parents
    - we iterate through all of children to check if it is in set so this is linear with respect to the length of children
    - overall the time complexity is O(m + n), where m is the length of parents and n is the length of children
  - Space Complexity: `O(m)`
    - we store all of parents in a set, which has a space complexity of O(m)

### Input, Output, Constraints, Edge (IOCE)

  - I: two arrays
  - O: boolean if the child elements is located in parent array
  - C: N/A
  - E:
    - empty array for child yields true for all parent arrays
    - reference variables for children and parents

### Strategy / Psuedocode
- Plan A (set):
  - create a set of stringified representations of the parent
  - iterate through the children
    - if the stringified version of the child is not in the set of parents => return false
  - return true if pass all these checks

## <a href='isSubsetOf.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```