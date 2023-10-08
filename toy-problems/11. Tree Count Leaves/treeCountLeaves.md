# 11. Tree Count Leaves

## About the Problem

Implement the `countLeaves` function in this Tree class.

A leaf node is any node in the tree that has no children. `countLeaves` should traverse the tree, and return the number of leaf nodes the tree contains.

Illustration of a tree with three leaves:

       * <- root
      / \
     *    * <- leaf
    / \
   *   * <- leaf
  /
 * <- leaf

### Examples

var root = new Tree();
   root.countLeaves(); // 1
   root.addChild(new Tree());
   root.countLeaves(); // still 1
   root.addChild(new Tree());
   root.children[0].addChild(new Tree());
   root.children[0].addChild(new Tree());
   root.children[0].children[0].addChild(new Tree());
   root.countLeaves(); // 3

## <a href='./treeCountLeaves.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we iterate through all the children of the tree node once, so time is linear
  - Space Complexity: `O(n)`
    - there are no storage variables dependent on the size of Tree
    - however, the recursion stack is dependent on the number of nodes on the Tree instance, so the space is linear.

### Input, Output, Constraints, Edge (IOCE)

  - I: N/A
  - O: Tree class with  the countLeaves function
  - C: N/A
  - E:
    - root with no children has 1 leaf

### Strategy
- Plan A (recursion):
  - iterate through the tree and determine how many tree nodes do not have any children
  - for every tree node without tree, increment leavesCount
  - return the leavesCount

### Pseudocode
- Plan A:
  - base case:
    - if the tree has no children, then return 1
  - if the tree has children,
    - the set count to 0
    - for each child,
      - recursively call the countLeaves function on the child and add the value to the count
  - return counts

## <a href='./treeCountLeaves.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```