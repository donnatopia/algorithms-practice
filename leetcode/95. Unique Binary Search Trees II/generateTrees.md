# 95. Unique Binary Search Trees II

## <a href='https://leetcode.com/problems/unique-binary-search-trees-ii/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer `n`, return all the structurally unique BST's (binary search trees), which has exactly `n` nodes of unique values from `1` to `n`. Return the answer in any order.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 3` | `[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]` |
| 2 | `n = 1` | `[[1]]` |

### Constraints:

- `1 <= n <= 8`

## <a href='./generateTrees.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 79 ms | 35.44% |
| Memory | 48.36 MB | 44.76% |

### Time and Space Complexity
- Time Complexity: `O(n^2)`
  - for the outer recursion, the time complexity is linear because the treeGenerator is run in a range from [1, n]
  - within each iteration, treeGenerator is called for the variables before and after the iteration consant, making the time complexity inside each iteration as linear
  - combined, this would lead to a time complexity of O(n^n)
  - however, mem would prevent computating the same combinations multiple times, which reduces the time complexity on average to O(n^2)
- Space Complexity: `O(n^2)`
  - the size of the map is dependent on the number of unique combinational ranges betwen start and end, which is about O(n^2)

### Input, Output, Constraints, Edge (IOCE)

- I: n (number): nodes of unique values
- O:
  - an array of TreeNode heads that represent all the structurally unique BSTs with n unique nodes
- C:
  - answer can be returned in any order
- E:
  - singular node has 1 unique tree

### Strategy
- Plan A: recursion/mem
  - iterate from the range of 1 to the value n
    - at each iteration, consider using the current value as the root value
    - need a base case for if start is greater than end
      - return an empty array
    - to determine the left tree values, generate a tree from the range of values from the start to the iteration constant - 1
    - to determine the right tree values, generate a tree from the range of values from iteration constant + 1 to the end
    - iterate through all the possible values for the left tree values
      - attach all the possible values for the right tree values
      - add the current tree to the array
    - store all the tree variables in mem object with key consisting of start and end
  - return the array of trees

### Pseudocode
- Plan A
  - define mem as an empty object
  - define a helper function that will generate trees given a start and end
    - iterate from the start to the end, inclusive
      - if start is greater than end
        - return array with null
      - if mem at start and end index exists
        - return value in map
      - define the left trees as running the function from start to the iteration constant - 1
      - define the right trees as running the function from iteration constant + 1 to end
      - define trees as empty array
      - iterate through all the elements of left trees
        - iterate through all the elements of right tree
          - define a root as a new tree node with the val as the iteration constant and the left tree as the left tree and right tree as right tree
          - push the root into the trees array
      - add the trees array into the mem object with the key as the start and end index
      - return mem at the start and end index
  - return the helper function from 1 to n

## <a href='./generateTrees.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```