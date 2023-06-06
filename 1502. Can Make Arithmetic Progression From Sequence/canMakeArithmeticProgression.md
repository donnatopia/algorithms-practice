# 1502. Can Make Arithmetic Progression From Sequence

## <a href='https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers `arr`, return `true` if the array can be rearranged to form an arithmetic progression. Otherwise, return `false`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `arr = [3,5,1]` | `true` |
| 2 | `arr = [1,2,4]` | `false` |

### Constraints:

- `2 <= arr.length <= 1000`
- `-10^6 <= arr[i] <= 10^6`

## <a href='./canMakeArithmeticProgression.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 57 ms | 78.26% |
| Memory | 42.8 MB | 22.3% |

### Time and Space Complexity
 - Time Complexity: `O(n log n)` (because of the sort method)
 - Space Complexity: `O(1)`

### Input, Output, Constraints, Edge (IOCE)

 - I: number[]
 - O: boolean (if the set of numbers can make an arithmetic progression)
 - C: at least a length of 2
 - E:
   - array length 2 results in true
   - all the same numbers would result in true

### Strategy
- order the numbers
- get the difference between the first two numbers
- compare the difference values to the rest of the elements in the array

### Pseudocode
- sort the array in descending order
- create a variable called difference which is set to the difference between the first two numbers
- start iteration at the third value
  - if the difference between the current value and the previous value is not equal to difference variable
    - return false
- return true after iteration

## <a href='./canMakeArithmeticProgression.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```