# 4. Constant Time Stack Min

## About the Problem

Write a stack using your preferred instantiation pattern. Implement a min function that returns the minimum value of all the elements in the stack in constant time.stack.

All of the functions in the Stack should run in constant time!

### Examples
```
var example = new Stack()
 example.push(4)
 example.push(3)
 example.min() === 3
 example.push(3)
 example.push(2)
 example.push(2)
 example.min() === 2
```

## <a href='./constantTimeStackMin.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(1)`
  - Space Complexity: `O(n^2)`
    - the length of the stack depends on the number of elements added to the stack O(n)
    - the length of the minStack depends on the numbers less than or equal to the first element of the array O(n)

### Input, Output, Constraints, Edge (IOCE)
- push
  - I: val (number)
  - O: N/A
    - SE: add val to the end of the stack
  - C: constant time
  - E: N/A

- pop
  - I: N/A
  - O: last element in the array
  - C: constant time
  - E: return undefined if array is length 0;

- min
  - I: N/A
  - O: the smallest element in the array
  - C: constant time
  - E: return undefined for array is length 0

- size
  - I: N/A
  - O: size of the stack
  - C: constant time
  - E: N/A

### Strategy / Pseudocode
- constructor
  - two arrays
  - one to track the order of elements
  - another to track the minimum elements
    - use the first element as a base
    - stack elements that are less than or equal to the last element of the stack

- push
  - push the value to the stack array
  - if there are no elements in the minStack or the value is less than or equal to the last element in the minStack
    - push the value to the minStack

- pop
  - define the val as the popped value of the stack
  - if val is equal to the last element of the minStack
    - pop off the element from the minStack
  - return val

- min
  - return the last element of minStack

- size
  - return the length of the stack

## <a href='./constantTimeStackMin.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```