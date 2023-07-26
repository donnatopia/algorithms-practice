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

### Constraints:

- `n == nums.length == cost.length`
- `1 <= n <= 10^5`
- `1 <= nums[i], cost[i] <= 10^6`

## <a href='./minCost.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 125 ms | 50.06% |
| Memory | 59.31 MB | 46.28% |

### Time and Space Complexity
 - Time Complexity: `O(n*log(n))`
  - creating the copy of the array using the map function has a time complexity of O(n)
  - Sorting the array has a time complexity of O(n*log(n))
  - while loop has a time complexity of O(n)
  - The time complexity is O(n*log(n) + 2n), which simplifies to O(n * log(n))
 - Space Complexity: `O(n)`
  - the variable nums_costs is size dependent of nums length, which means that the space complexity is O(n)
  - other variables require constant space

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
- the goal is to equalize all the numbers in the array to a target element such that the cost is minimize
- cost is based on the individual cost associated with the number element in the array and the difference between the current element and the target element

- we need to find a way to minimize both the difference and the individual cost
- we can sort the array and use the 2 pointers method to meet in the middle as a way of minimizing the difference towards the end of our loop

- most likely that the target element is closer to the average value between the minimum and the maximum
- as we compare the left pointer and the right pointer (while valid)
  - the difference is fixed to change the left pointer value to the right pointer value, so we would choose to change the element that has the lower individual cost associated with it
    - we would need to increment the cost accrued by the difference between the two elements and the unit cost
    - we would now need to shift the left pointer up an index or the right pointer down an index
    - we now need to update the unit cost by including the cost of the shifted pointer value
- return the total sum

- example:
  - sort the array
  - nums: [1, 2, 3, 5], costs: [2, 14, 3, 1]

| nums | left_index | right_index | left_cost | right_cost | accrued_cost |
| --- | --- | --- | --- | --- | --- |
| [1, 2, 3, 5] | 0 | 3 | 2 | 1 | 0 |
| [1, 2, 3, 3] | 0 | 2 | 2 | 3 + 1 = <br>4</br> | (5 - 3) * 1 = <br>2</br> |
| [2, 2, 3, 3] | 1 | 2 | 2 + 14 = <br>16</br> | 4 | (2 - 1) * 2 = <br>2</br> |
| [3, 3, 3, 3] | 1 | 1 | 16 | 4 + 14 = <br>18</br> | (3 - 2) * 4 = <br>4</br> |

total_cost = 2 + 2 + 4 = 8

### Pseudocode
- create a variable called nums_and_costs and set the map value of sorted nums with their associated costs in tuples
- sort nums_and_costs using the sort function in ascending order of nums

- define left_index as 0
- define right_index as the last index value
- define left_cost as the cost at left_index
- define right_cost as the cost at right_index
- define total_cost as 0

- create a while loop for while the right index is greater than the left index
  - if the left_cost is less than the right_cost -> then this means we need to change the left value to the next lowest value
    - define the current value at the left pointer
    - define the next lowest value as the value 1 increment higher than the left index
    - add to the total cost the difference between the current value and the next lowest value times the left cost
    - increment the left index
    - increment the left cost by the cost associated with the new left index
  - else -> this means we need to change the right value to the next highest value
    - define the current value at the right pointer
    - define the next highest value as the value 1 increment lower than the right index
    - add to the total cost the difference between the current value and the next highest value times the right cost
    - decrement the right index
    - increment the right cost by the cost associated with the new right index

- return the total value

## <a href='./minCost.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```