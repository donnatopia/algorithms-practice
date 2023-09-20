# 1658. Minimum Operations to Reduce X to Zero

## <a href='https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/?envType=daily-question&envId=2023-09-20'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce `x` to exactly `0` if it is possible, otherwise, return `-1`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,1,4,2,3], x = 5` | `2` |
| 2 | `nums = [5,6,7,8,9], x = 4` | `-1` |
| 3 | `nums = [3,2,20,1,1,3], x = 10` | `5` |

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^4`
- `1 <= x <= 10^9`

## <a href='./minOperations.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 78 ms | 81.25% |
| Memory | 52.80 MB | 84.38% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - sliding window has a linear time complexity
  - Space Complexity: `O(1)`
    - there are no additional data structures created

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - nums (number[])
    - x (number)
  - O:
    - minimum number of deletions to reduce x to 0
  - C: N/A
  - E:
    - return -1 if there are no ways to reduce x to 0

### Strategy
- Plan A (recursion)
  - if x is already 0, then return 0
  - if the first element is less than or equal to x
    - then call the function on the array without the first element and the difference between x and the first element
  - if the last element is less than or equal to x
    - then call the function on the array without the last element and the difference between x and the last element
  - take the minimum between the two function calls else return -1

- Plan B (sliding window)
  - find the largest subarray with a sum equal to the sum of all the elements - x
  - return the difference between the largest subarray length and the original array

### Pseudocode
- Plan A (recursion) -> time out
  - if x is 0, then return 0
  - define first recursive call as -1
  - define second recursive call as -1
  - if the first element is less than or equal to x
    - define the result of recursively calling the function on the array.slice(1) and x - first element
  - if the last element is less than or equal to x
    - define the result of recursively calling the function on the array.slice(0, n - 1) and x - last element
  - if the first recursive call and second call is greater than -1
    - then return 1 + min of first recursive call and second recursive call
  - if first recursive call is -1
    - then return 1 + second recursive call
  - else if second recursive call is -1
    - then return 1 + first recursive call
  - else
    - return -1

- Plan B (sliding window):
  - get the sum of all the values using the reduce function
  - define the target sum as the sum - x
  - define the left pointer as 0
  - define the right pointer as 0
  - define the sum as the first element of the array
  - while the left pointer is less than array length
    - if the sum is less than the target sum
      - increment the right
      - add the value at the right pointer
    - if the sum is greater than the target sum
      - subtract the value at the left pointer
      - increment the left pointer
    - if the sum is equal to the target sum
      - return nums.length - (right - left + 1)
  - return -1

## <a href='./minOperations.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```