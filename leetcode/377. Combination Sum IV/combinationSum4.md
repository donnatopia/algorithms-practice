# 377. Combination Sum IV

## <a href='https://leetcode.com/problems/combination-sum-iv/?envType=daily-question&envId=2023-09-09'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an array of distinct integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`.

The test cases are generated so that the answer can fit in a 32-bit integer.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,2,3], target = 4` | `7` |
| 2 | `nums = [9], target = 3` | `3` |

### Constraints:

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- All the elements of `nums` are unique.
- `1 <= target <= 1000`

### Follow-Up

What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

## <a href='./combinationSum4.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 65 ms | 29.79% |
| Memory | 42.08 MB | 85.64% |

### Time and Space Complexity
  - Time Complexity: `O(m * n)`
    - the outer for loop iterates for the length of target + 1, which is O(n)
    - the inner for loop iterates for the length of nums, which is O(m)
    - nested for loops would mean that the time complexity multiplies to O(m * n), where m is the length of nums and n is the target
  - Space Complexity: `O(n)`
    - the only constructed data structures is dp, whose size is contigent on the size of target
    - thus, the space complexity is O(n), where n is the size of target

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - number[]: unique and positive
    - number: target sum
  - O:
    - number: total combinations of numbers in number[] to create sum
  - C: N/A
  - E: N/A

### Strategy
- Plan A (2D dp):
  - create a matrix
    - row indicates the element in nums array
    - col indicates the total
  - use the matrix to indicate the effect of adding the next available number to add up to sum
    - for example for [1, 2, 3] and target = 2, position (0, 0) would indicate the number of combinations to create the total 1 with just 1
  - when filling in the matrix
    - each position is initially 0
    - starting from the value of the coin (element in nums)
      - the total is 1 + dp[total - coin] (this is the dp for the remaining amount after using one of the coin)
  - return the value using all the elements in nums array at the total

- Plan B (1D dp):
  - create an array, where every indicates the number of ways to create total (as indicated by the index of the array) using the selection of nums
    - the dp array would have to be the length of the target + 1 in order to include the target index
    - fill each value with 0
  - the return value would be at the target index of the array

  - at the 0th index, the total would be 0 as there is no combinations of nums to create the total (maybe it would be 1 though as if we use NO numbers in nums to add up to 0)
    - test this out

  - iterate through the lenght of the dp starting from the lowest value in nums
    - iterate through all the nums in num
      - take the remainder after subtracting the index value with the current value
      - if the remainder is greater than 0
        - then the dp at the current position is 1 + the dp of the remainder

### Pseudocode
- Plan A (2D dp)
  - create dp as an Array of length nums + 1 filled by Array of length total + 1 filled with 0
  - set dp at 0, 0 as 0
  - iterate from 1 the length of dp
    - iterate from nums at the current index to length of dp at the index
      - set dp at the position to be 1 + dp[i - 1][total - coinValue]
  - return dp at bottom right

## <a href='./combinationSum4.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```