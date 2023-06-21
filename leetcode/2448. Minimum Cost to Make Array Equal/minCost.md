# 2448. Minimum Cost to Make Array Equal

## <a href='https://leetcode.com/problems/minimum-cost-to-make-array-equal/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given two 0-indexed arrays `nums` and `cost` consisting each of `n` positive integers.

You can do the following operation any number of times:

- Increase or decrease any element of the array `nums` by `1`.

The cost of doing one operation on the `ith` element is `cost[i]`.

Return the minimum total cost such that all the elements of the array `nums` become equal.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,3,5,2], cost = [2,3,1,14]` | `8` |
| 2 | `nums = [2,2,2,2,2], cost = [4,2,8,1,3]` | `0` |
| 3 |  |  |

### Constraints:

- `n == nums.length == cost.length`
- `1 <= n <= 10^5`
- `1 <= nums[i], cost[i] <= 10^6`

## <a href='./minCost.js'>About the Solution</a>

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
  - number[]: list of numbers that need all contain the same elements
  - number[]: corresponds to number and includes the cost to change an element in the same index
 - O: number
  - the minimum cost to make all the elements equal in the nums array
 - C:
  - numbers are all positive integers
  - length of the array can be up to 10^5 (means it will be very time inefficient if i iterate through all of the possible options)
  - cost can be as high as 10^6 (probably will be space inefficient if i store all the possible choices)
 - E:
  - if all the elements in nums are already equal, then the output is 0

### Strategy
- keep a running variable for the minimum cost
- iterate through all the elements of nums
  - use the current number index as the blueprint as the number to make the rest of the nums array to equate
  - calculate the cost of turning all the nums in the array into the current index number
    - if the running total already exceeds the minimum cost, then move onto the next number index
  - update the minimum cost with the total
- return the running variable

- alterative ideas
- probably should sort the arrays such that nums and cost is in descending cost order

### Pseudocode
- create a variable for min cost and set to Number.POSITIVE_INFINITY
- itereate through nums (i)
  - iterate through nums (j)
    - if the nums (i) index is equal to nums (j) index, then skip this index
    - get the absolute value difference between nums (i) and nums (j)
    - if the cost times difference at the corresponding index is greater than min
      - break the j loop
    - else
      - update the min variable
- return min

## <a href='./minCost.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```