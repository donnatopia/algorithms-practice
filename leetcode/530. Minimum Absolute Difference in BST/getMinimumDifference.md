# 530. Minimum Absolute Difference in BST

## <a href='https://leetcode.com/problems/minimum-absolute-difference-in-bst/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `root = [4,2,6,1,3]` | `1` |
| 2 | `root = [1,0,48,null,null,12,49]` | `1` |

### Constraints:

- The number of nodes in the tree is in the range `[2, 104]`.
- `0 <= Node.val <= 10^5`

## <a href='./getMinimumDifference.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 111 ms | 9.6% |
| Memory | 52.2 MB | 5.14% |

### Time and Space Complexity
 - Time Complexity: `O(n^2)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: TreeNode
  - this.val<number>
  - this.left<number>
  - this.right<number>
 - O: number (minimum difference between two different nodes)
 - C:
  - there will always be at least two nodes in the tree
  - the lowest value of the node is 0
  - definition of binary search tree does not permit duplicates => the lowest possible value to return is 1
 - E:
  - N/A

### Strategy

- continually update the minimum difference value as you iterate through all the nodes of BST
  - if the difference is 1, then return that value because there will not be any lower value to return
- return the minimum difference after all the iteration

- keep a running minimum difference value
- iterate through all the nodes of the tree
  - calculate the difference between the child and the parent (the difference between the child and the parent will always be less than the difference between sibling nodes)
  - if the difference is 1, return that value
  - if the difference is less than the minimum value => replace the minimum value
- after iterating through all the nodes, then return the minimum value

- should use recursion to call the function the child nodes

### Pseudocode

- create a variable called minimum and set to Math.INFINITY
- if there is a left value
  - calculate the difference between the left value and the current value
  - if the difference is 1, then return 1;
  - if the difference is less than the minimum value => set the minimum to the difference
  - set the minimum to minimum between the current minimum value and the function call to the left node
- if there is a right value
  - calculate the difference between the right value and the current value
  - if the difference is 1, then return 1;
  - if the difference is less than the minimum value => set the minimum to the difference
  - set the minimum to minimum between the current minimum value and the function call to the right node
- return the minimum value

## <a href='./getMinimumDifference.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```