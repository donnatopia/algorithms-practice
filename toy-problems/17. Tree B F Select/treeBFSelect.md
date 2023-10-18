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

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - enqueue operation takes place in linear time
    - dequeue operation takes place in linear time
    - this overall takes linear time
  - Space Complexity: `O(n)`
    - the queue structure will take at most the length of all the nodes in the tree, so this is linear
    - the filtered strucutre will take at most all the elements in the tree, which is linear
    - congruent functions, so the space is 2n, which simplifies to n


### Input, Output, Constraints, Edge (IOCE)

  - I: function that accepts a value and depth parameter
  - O: a flat array of all values where the filter returns true
  - C: N/A
  - E: return an empty array if none of the values return true

### Strategy / Pseudocode
- Plan A => depth-first
  - define a result array
  - iterate through each node based on depth
    - add the element to the result array if the value when put into the function is true
  - return the result array

- Plan B => breadth-first
  - iterrate through each node based on depth using queue (first in, first out)
  - create a queue data structure
  - enqueue the first tree as an object that accepts the value and the depth
  - while the queue still has elements
    - define the current value as the dequeue element of the queue
    - if applying the filter to the current.value and current.depth is true => add to the results array
    - iterate through all the children of the current tree
      - add the child to the queue with the tree and the depth + 1
  - return the result array

## <a href='./treeBFSelect.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```