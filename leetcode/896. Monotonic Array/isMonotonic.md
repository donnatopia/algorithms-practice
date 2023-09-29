# 896. Monotonic Array

## <a href='https://leetcode.com/problems/monotonic-array/?envType=daily-question&envId=2023-09-29'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` if the given array is monotonic, or `false` otherwise.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,2,2,3]` | `true` |
| 2 | `nums = [6,5,4,4]` | `true` |
| 3 | `nums = [1,3,2]` | `false` |

### Constraints:

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`

## <a href='./isMonotonic.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 85 ms | 28.98% |
| Memory | 53.36 MB | 40.41% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - time is linear because we iterate through the length of nums
  - Space Complexity: `O(1)`
    - there are no additional data structures that require the length of nums

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: boolean if the array is monotonic increasing or decreasing
  - C: N/A
  - E: singular element in the array returns true

### Strategy
- Plan A:
  - return true if the array's length is 1
  - keep track if the array is increasing or decreasing
  - iterate through the length of the array
    - compare the two elements of the array
    - if the change is not defined
      - then define the change as the change between the two elements (either increasing or decreasing)
      - move onto the next iteration
    - if the change between the two elements does not match the change established AND the two elements are not equal
      - then return false
  - return false loop

### Pseudocode
- Plan A:
  - set change as 0
  - iterate through the length of the array until the second to last index
    - define num1 as the num at the current index
    - define num2 as the num at the next index
    - if change is 0,
      - set change to 1 if the num2 is greater than num1
      - set change to -1 if num2 is less than num1
    - if change is 1
      - then return false if num2 is less than num1
    - if change is -1
      - then return false if num2 is greater than num1
  - return true;

## <a href='./isMonotonic.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```