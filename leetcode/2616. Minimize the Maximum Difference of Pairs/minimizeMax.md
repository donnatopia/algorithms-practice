# 2616. Minimize the Maximum Difference of Pairs

## <a href='https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given a 0-indexed integer array `nums` and an integer `p`. Find `p` pairs of indices of `nums` such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the `p` pairs.

Note that for a pair of elements at the index `i` and `j`, the difference of this pair is `|nums[i] - nums[j]|`, where `|x|` represents the absolute value of `x`.

Return the minimum maximum difference among all `p` pairs. We define the maximum of an empty set to be zero.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [10,1,2,7,1,3], p = 2` | `2` |
| 2 | `nums = [4,2,1,2], p = 1` | `0` |

### Constraints:

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= p <= (nums.length)/2`

## <a href='./minimizeMax.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

 - I:
  - nums (number[]): unsorted numbers
  - p (number): number of pairs to create among the nums array
 - O:
  - number that represents the maximum value from a list of minimized difference between p pairs in nums
 - C:
  - each index can only appear once amongst the p pairs
 - E:
  - empty set has a maximum of zero

### Strategy
- Plan A (failed):
  - sort all the numbers
  - keep a running value for the maximum difference
  - iterate through p * 2 values
    - calculate the difference betwen two variables
    - if the difference is greater than the maximum difference
      - replace the maximum difference
  - return the maximum difference

- Plan B:
  - Plan A failed because I made the incorrect assumption that the minimized difference can be attained by subtracting the current index by the next lowest value
  - need to consider other variations of minimized difference
  - still need to sort the nums in ascending order
  - should iterate through all the variables
    - maybe the max value should be between the difference of the current index and the index before AND the current index and the index after
      - need to prevent repitition?

### Pseudocode
- Plan A (failed):
  - sort all the numbers in ascending order
  - define a variable called max and set to 0
  - iterate from 0 to the p * 2, inclusive and increment by 2
    - define diff to value at index + 1 minus index
    - reassign max to the maximum value between diff and current max value
  - return max difference

- Plan B:
  - sort all the numbers in ascending order
  - define a variable called max and set to 0
  -iterate from 0 to the


## <a href='./minimizeMax.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```