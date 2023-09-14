# 135. Candy

## <a href='https://leetcode.com/problems/candy/?envType=daily-question&envId=2023-09-13'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `ratings = [1,0,2]` | `5` |
| 2 | `ratings = [1,2,2]` | `4` |

### Constraints:

- `n == ratings.length`
- `1 <= n <= 2 * 10^4`
- `0 <= ratings[i] <= 2 * 10^4`

## <a href='./candy.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 65 ms | 59.67% |
| Memory | 45.52 MB | 44.89% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iterating through the length of the ratings happen 3 times (forward tracking, backtracking, and the reduce function)
    - however, the functions are congruet, so the overall time complexity is still linear
  - Space Complexity: `O(n)`
    - the leading data structure is dp, which is dependent on the length of ratings, so the space complexity is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: min number of candies to give to the children
  - C: N/A
  - E:
    - all the same ratings will yield the length of the ratings array

### Strategy
- Plan A:
  - create a dp of the amount of candy each child is to recieve
  - reduce the dp to the sum of all the elements

- Plan B:
  - create a dp of the amount of candy allotted to each child
  - forward tracking
    - if the rating at the current index is greater than rating at the next index
      - increment the dp at the next index
  - backtracking
    - if the rating at the previous index is greater than current index
      - redefine the previous index to either be the maximum value of either its value or the value of the current index + 1
  - return the reduce value of the dp

### Pseudocode
- Plan A:
  - define dp as an array length of the ratings and set all the elements to 1
  - iterate through the length of the ratings - 1
    - if the dp indices at the current and next are the same
      - if the rating at the current index is less than next index
        - increment the dp at the next index
      - else if the rating at the current index is greater than next index
        - increment the dp at the current index
    - else
      - if the rating at the current index is greater than next && the dp at the current index is less than next
        - can't happen actually => current index can be 1 at the very least and next is always 1
      - else if the rating at the current index is less than next && dp at the current index is greater than next
        - set the dp at the next to the dp at current + 1
  - return the reduce function of dp with accumulator set to 0

- Plan B:
  - define dp as an array lenght of the ratings na dset all the elemnts to 1
  - iterate through the length of ratings from 0 to second to last index
    - if the rating at the next index is greater the rating at the current index
      - set the dp at the next index as the dp at the current index + 1
  - iterate through the length of ratings from last index to first index
    - if the rating at the previous index is greater than the rating at the current index
      - set the dp at the previous index as the max value between its current value and the dp at the current index + 1
  - return reduced value of dp

## <a href='./candy.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```