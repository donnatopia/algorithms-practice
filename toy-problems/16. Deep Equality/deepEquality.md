# 16. Deep Equality

## About the Problem

Write a function that, given two objects, returns whether or not the two
are deeply equivalent--meaning the structure of the two objects is the
same, and so is the structure of each of their corresponding descendants.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}` | `true` |
| 2 | `deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})` | `false` |

## <a href='./deepEquality.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we iterate through all the keys value pairs of apple and orange exactly once, so time is linear
  - Space Complexity: `O(d)`
    - we recursively call the function based on the number of nested objects stored in apple and orange, where d is the number of nested object

### Input, Output, Constraints, Edge (IOCE)

  - I: two objects
  - O: boolean if the two reference objects are deeply equal to one another
  - C: N/A
  - E: empty objects are equal to one another

### Strategy
- Plan A (recursion):
  - check to see if both inputs are the same type
  - if inputs are different types => return false
  - if inputs are both numbers or both strings => return whether the two input are deeply equal to each other
  - if inputs are both objects
    - if the length of the keys are different => return false
    - iterate through the length of apple
      - if orange does not have the same property as apple => return false
      - else
        - recall the function on the values of the apple and orange
  - probably should use the Array.prototype.every function

### Pseudocode
- Plan A:
  - define the type of apple
  - define the type of orange
  - if the types of apple and orange do not match => return false
  - if the type of apple and orange are both string OR both numbers => return the deep equality between apple and orange
  - if the type of apple and orange are both objects
    - if the length of the apple keys and length of the orange keys are different => return false
    - iterate through all the keys of apple
      - if orange does not have the same key as apple => return false
      - return false if the deepEquals function of the value of orange and apple at the same key is false => else null
  - return true if pass all the checks

## <a href='./deepEquality.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```