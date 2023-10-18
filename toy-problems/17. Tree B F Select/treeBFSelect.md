# 17. Tree B F Select

## About the Problem

Implement a `BFSelect` method on this Tree class.

BFSelect accepts a filter function, calls that function on each of the nodes in Breadth First order, and returns a flat array of node values of the tree for which the filter returns true.

### Examples

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  return value % 2;
})
// [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
})
// [2, 3]

## <a href='./treeBFSelect.js'>About the Solution</a>

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

## <a href='./treeBFSelect.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```