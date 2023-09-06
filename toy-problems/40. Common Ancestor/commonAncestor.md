# 40. Common Ancestor

## About the Problem

Implement the function `getClosestCommonAncestor` and `getAncestorPath` in the following Tree class

### Examples

var grandma = new Tree();
var mom = new Tree();
grandma.addChild(mom);
var me = new Tree();
mom.addChild(me);
grandma.getAncestorPath(me); // => [grandma, mom, me]

## <a href='./commonAncestor.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n)`
  - time is dependent on the length of the ancestral path from the current instance to each of the nodes
  - traversal down the ancestral path is linear with respect to the ancestral distance
 - Space Complexity: `O(n)`
  - recursion stack is dependent on the number of children

### Input, Output, Constraints, Edge (IOCE)

 - I: Tree Class
  - getClosestCommonAncestor: Tree
  - getAncestorPath: Tree
 - O: Tree functions
  - getClosestCommonAncestor
    - return the lowest common ancestor of the two child nodes.
    - null otherwise
  - getAncestorPath
    - Tree[] from input tree to this
    - null otherwise
 - C: N/A
 - E: no relation would yield null

### Strategy / Pseudocode
- getClosestCommonAncestor
  - get the ancestral path from the current instance and each of the children node
  - if the path from the current instance and any of the children node does not exist, then return null
  - traverse path from parent to the respective children (use the shortest length)
    - update the common ancestor until they no longer match
  - return the common ancestor

- getAncestorPath (backtracking)
  - define an empty array as the ancestor path
  - iterate from the current node to the relative
    - at each node, add the node to the ancestor path
    - if the node is equal to the relative
      - break the cycle
    - else iterate through all the node children
      - recursively call the function on the node children
    - after the for loop, remove the current node
  - return ancestorPath if its length is greater than 0, else return null

## <a href='./commonAncestor.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```