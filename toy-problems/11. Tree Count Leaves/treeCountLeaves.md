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

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

  - I:
  - O:
  - C:
  - E:

### Strategy
-

### Pseudocode
-

## <a href='./treeCountLeaves.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```