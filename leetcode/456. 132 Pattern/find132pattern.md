# 456. 132 Pattern

## <a href='https://leetcode.com/problems/132-pattern/?envType=daily-question&envId=2023-09-30'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an array of `n` integers `nums`, a 132 pattern is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` if there is a 132 pattern in `nums`, otherwise, return `false`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,2,3,4]` | `false` |
| 2 | `nums = [3,1,4,2]` | `true` |
| 3 | `nums = [-1,3,2,0]` | `true` |

### Constraints:

- `n == nums.length`
- `1 <= n <= 2 * 10^5`
- `-10^9 <= nums[i] <= 10^9`

## <a href='./find132pattern.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 58 ms | 93.44% |
| Memory | 54.02 MB | 60.08% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iteration through the nums array is linear
  - Space Complexity: `O(n)`
    - the stack can store all the elements in the array for worse case, so the space is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: boolean
    - true if there is a 132 pattern
    - false if there is NOT a 132 pattern
  - C: N/A
  - E:
    - nums.length < 3: returns false

### Strategy
- Plan A (sliding window?):
  - if the length is less than 3, then return false
  - set the first element as the nums[0]
  - set the second element as nums[1]
  - set the third element as nums[2]
  - use a while loop?
  - compare three integers
    - if the second element is greater than the first element AND the third element is greater than the first element AND the second element is greater than the third element
      - return true
  - after iterating through all integers
    - return false

- Plan B (three pointers) -> time maxed out
  - first pointer runs through the length of nums
  - second pointer runs through the length of nums from the first pointer until a num that is greater than first pointer
  - third pointer runs through the length of nums from second pointer to the end of the nums until reach a number that is less than value at the second pointer AND greater than the value at the first pointer
    - if a value can be reached => return true

- Plan C (stack):
  - initialize a stack that keeps track of potential second numbers
  - initialize a third value that is set to a minimum value
  - the third value is only updated if the last item in the second stack is less than the current value of third
  - every value is added to the second stack
  - if the current value is less than the third value then return true
  - iterate from the end to start
  - return false after all the iteration


### Pseudocode
- Plan A -> didn't consider that subsequence don't need to be consecutive
  - if the length is less than 3, then return false
  - set i as 0
  - set j as 1
  - set k as 2
  - while k is less than nums.length
    - if nums[j] > nums[i] && nums[k] > nums[i] && nums[j] > nums[k]
      - return true
    - increment i
    - increment j
    - increment k
  - return false

## <a href='./find132pattern.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```