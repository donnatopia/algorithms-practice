# 964. Validate Stack Sequences

## <a href='https://leetcode.com/problems/validate-stack-sequences/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given two integer arrays `pushed` and `popped` each with distinct values, return `true` if this could have been the result of a sequence of push and pop operations on an initially empty stack, or `false` otherwise.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `pushed = [1,2,3,4,5], popped = [4,5,3,2,1]` | `true` |
| 2 | `pushed = [1,2,3,4,5], popped = [4,3,5,1,2]` | `false` |

### Constraints:

- `1 <= pushed.length <= 1000`
- `0 <= pushed[i] <= 1000`
- All the elements of `pushed` are unique.
- `popped.length == pushed.length`
- `popped` is a permutation of `pushed`.

## <a href='./validateStackSequences.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 62 ms | 77.34% |
| Memory | 44.3 MB | 35.55% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: 2 arrays of numbers (pushed values & pop values)
 - O: boolean
 - C: all elements of pushed are unique
 - E: N/A

### Strategy
- iterate through the push values and add to a stack
- iterate through the pop values
- check for the pop values within the push values in a stack
- return if the stack length is 0

### Pseudocode
- define an empty stack
- define a pop index pointer
- iterate through the push values
  - while the stack's last element matches the pop value at pop index
    - pop the stack
  - push the value at the index into the stack
- repeat the while loop here
- return if the stack length is 0

## <a href='./validateStackSequences.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```