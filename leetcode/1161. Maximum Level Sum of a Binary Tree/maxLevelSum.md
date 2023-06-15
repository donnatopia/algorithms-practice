# 1161. Maximum Level Sum of a Binary Tree

## <a href='https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on.

Return the smallest level `x` such that the sum of all the values of nodes at level `x` is maximal.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `root = [1,7,0,7,-8,null,null]` | `2` |
| 2 | `root = [989,null,10250,98693,-89388,null,null,null,-32127]` | `2` |

### Constraints:

- The number of nodes in the tree is in the `range [1, 10^4]`.
- `-10^5 <= Node.val <= 10^5`

## <a href='./maxLevelSum.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 145 ms | 93.17% |
| Memory | 75.9 MB | 26.83% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: Tree Node (val, left, right) of a binary tree (non-ordered)
 - O: number (lowest level such that the sum of all the values of nodes at this level is maximized)
 - C: at least 1 node and numbers can be negative
 - E:
  - 1 node in the tree returns the level 1

### Strategy
- create a variable that is the maximum sum at a level
- create a variable that is the level index at the maximum sum
- create a variable for the current level
- iterate through each level in the binary tree
  - at each level calculate the sum
  - if the sum is greater than the maximum sum, then update the maximum sum and update the level at maximum sum index to the current level
  - increment the current level
- return the level index at the maximum sum

### Pseudocode
- create a variable that is the maximum sum at a level and set to the current value
- create a variable that is the level index at the maximum sum and set to 1

- create a function that moves onto the next level that accepts an array of nodes and current level
  - create a variable number for the running total
  - create a variable array of next nodes
  - iterate through the array of nodes
    - add the value to the running total
    - if the left node exists, then push the node to the variable array
    - if the right node exists, then push the node to the variable array
  - if the running total is greater than the maximum sum
    - update the level index to the current level
    - update the maximum sum to the running total
  - if nextNodes length is greater than 0
    - recall the function with the variable array of next nodes and level incremented by 1

- create a variable array
- if the left node exists, then push the node to the variable array
- if the right node exists, then push the node to the variable array

- call the function on the variable array and the current level

- return the level index at the maximum sum

## <a href='./maxLevelSum.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```