# 1372. Longest ZigZag Path in a Binary Tree

## <a href='https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given the `root` of a binary tree.

A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

### Examples

| Example| Visualization | Input | Output |
| --- | --- | --- | --- |
| 1 | <img src='https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png' /> | `root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]` | `3` |
| 2 | <img src='https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png' /> | `root = [1,1,1,null,1,null,null,1,1,null,1]` | `4` |
| 3 | N/A | `root = [1]` | `0` |

### Constraints:

- The number of nodes in the tree is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 100`

## <a href='./longestZigZag.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 8035 ms | 5.2% |
| Memory | 89.1 MB | 6.59% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(log(n))`

### Input, Output, Constraints, Edge (IOCE)

 - I: Tree Node root
 - O: length of the longest zigzag path (number)
 - C: N/A
 - E: singular node with no left or right value evaluates to 0

### Strategy
- should use some kind of recursion

- find the longest zig zag path left and right of the tree node
- return the max value between the left and right tree node

- track left
  - if there is a left node, then start the count at 1
  - move to the left node and check to see if there is a right node
    - yes, then increment count to 2
  - now move to the right node and check to see if there is a left node
    - yes, then increment count to 3
    - no, then run the main function on the current node
    - return the max between the increment value or the return value of the main function on the current node

- track right
  - if there is a right node, then start the count at 1
    - if not, then return 0;

- return the max value between the left and right tracking

### Pseudocode
- create a function to track left which accepts the current node
  - if there is a left node,
    - return the maximum value betweeen
      - 1 + track right for the left node
      - run function on the left node
  - else
    - return 0

- create a function to track right which accepts the current node
  - if there is a right node,
    - return the maximum value between
      - 1 + track left for the right node
      - run function on the right node
    - else
      - return 0

- return the maximum value between tracking left and tracking right of the current node