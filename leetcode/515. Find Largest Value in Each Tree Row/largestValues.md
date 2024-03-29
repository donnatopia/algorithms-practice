# 515. Find Largest Value in Each Tree Row

## <a href='https://leetcode.com/problems/find-largest-value-in-each-tree-row/?envType=daily-question&envId=2023-10-24'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given the `root` of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `root = [1,3,2,5,3,null,9]` | `[1, 3, 9]` |
| 2 | `root = [1,2,3]` | `[1, 3]` |

### Constraints:

- The number of nodes in the tree will be in the range `[0, 10**4]`.
- `-2^31 <= Node.val <= 2^31 - 1`

## <a href='largestValues.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 68 ms | 46.15% |
| Memory | 47.12 MB | 35.29% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - traversal through the nodes is linear
    - reducing the nodes to max is linear
    - congruent functions means that the overall time complexity is linear
  - Space Complexity: `O(n)`
    - at most, we will store the length of all the nodes in the tree, so this is also linear

### Input, Output, Constraints, Edge (IOCE)

  - I: TreeNode
  - O: number[] containing the largest value in each row of the tree
  - C: N/A
  - E:
    - empty tree => empty array
    - negative values in present

### Strategy / Pseudocode
- Plan A (stackish)
  - convert the tree to a matrix
    - iterate down the binary treee until all the values are placed onto the matrix
    - return the map the matrix to a new array with only the max values of each row

## <a href='largestValues.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```