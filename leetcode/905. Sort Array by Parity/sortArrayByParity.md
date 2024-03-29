# 905. Sort Array by Parity

## <a href='https://leetcode.com/problems/sort-array-by-parity/?envType=daily-question&envId=2023-09-28'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [3,1,2,4]` | `[2,4,3,1]` The outputs `[4,2,3,1]`, `[2,4,1,3]`, and `[4,2,1,3]` would also be accepted. |
| 2 | `nums = [0]` | `[0]` |

### Constraints:

- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 5000`

## <a href='./sortArrayByParity.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 74 ms | 20.02% |
| Memory | 44.96 MB | 23.88% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iteration through the length of the array has linear time
  - Space Complexity: `O(n)`
    - the result array has the same length of nums

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: number[] where all the even numbers are at the beginning of the array
  - C: N/A
  - E: no odd numbers returns the same array

### Strategy / Pseudocode
- Plan A:
  - create an empty array
  - iterate through the length of the array
    - if the number is even, unshift the element to the result array
    - else, push the element to the result array
  - return the result array

## <a href='./sortArrayByParity.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```