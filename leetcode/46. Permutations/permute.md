# 46. Permutations

## <a href='https://leetcode.com/problems/permutations/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,2,3]` | `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]` |
| 2 | `nums = [0,1]` | `[[0,1],[1,0]]` |
| 3 | `nums = [1]` | `[[1]]` |

### Constraints:

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of `nums` are unique.

## <a href='./permute.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 65 ms | 82.36% |
| Memory | 45.22 MB | 23.91% |

### Time and Space Complexity
 - Time Complexity: `O(n!)`
  - the inital for loop would have an O(n) time complexity
  - subsequent for loops done through recursion would have O(n - 1) time complexity and so on until n is 0
  - thus, the time complexity is O(n!)
 - Space Complexity: `O(n!)`
  - the space complexity is dependent on the number of permutations possible for a combination
  - permutations stored in an array would have a space complexity of O(n!)

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - array of distinct integers
 - O:
  - number[][] listing all the permutations of the input array in any order
 - C:
  - nums length includes at least 1 and can be as large as 6
  - value of nums can be negative and zero
  - all integers of nums are unique
 - E:
  - singular number would yield an array with the input array

### Strategy
- Plan A:
  - need to iterate through each number in nums
    - the current number is the leading number
    - the rest of the numbers need to go through the permuation function as well (recursion)

### Pseudocode
- Plan A:
  - define a permutations array and set to an empty array
  - REMEMBER BASE CASE in recursion
  - if nums.length === 0, then return an empty array within another array
  - create a for loop that iterates through the length of nums
    - create an array variable called remainingNumbers that contains all elements excluding the current variable
    - create an array variable called remainingPermutations run the permutation function on the remaining variables
    - iterate through remainingPermutations
      - unshift the current variable to the current remainingPermutations array
      - push the current remainingPermutation array to the permutations array
  - return the permutation array

## <a href='./permute.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```