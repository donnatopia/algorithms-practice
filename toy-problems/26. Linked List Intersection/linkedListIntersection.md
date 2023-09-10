# 26. Linked List Intersection

## About the Problem

Write a function `linkedListIntersection` that returns the node at which the intersection of two linked lists begins, or null if there is no such intersection.

### Examples
Given the following two linked lists `list1` and `list2`, `linkedListIntersection(list1,list2)` should return `D` as the node of intersection.

    A → B → C
             ↘
               D → E → F
             ↗
        X → Y


Given the following two linked lists list1 and list2, linkedListIntersection(list1,list2) should return NULL as there is no point of intersection.
    A → B → C → D    X → Y → Z

## <a href='./linkedListIntersection.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n * m)`
    - iteration through list1 is O(n), where n is the number of nodes in list1
    - iteration through list2 is O(m), where m is the number of nodes in list2
  - Space Complexity: `O(1)`
    - no additional data structures

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - list1 (ListNode)
    - list2 (ListNode)
  - O:
    - ListNode of where the two lists intersect
    - else null
  - C: N/A
  - E:
    - common node value, but not the same node (for the sake of simplicity, every node value is distinct)

### Strategy
- Plan A (brute force):
  - compare every single node until you find a commonality
  - return null otherwise

### Pseudocode
- Plan A (brute force):
  - iterate through all the nodes of list1
    - iterate through all the nodes of list2
      - check to see if the value of the node1 and node2 are equal
        - return node1
    - run it through the function LinkedListIntersection of the next node and list2
  - return null

## <a href='./linkedListIntersection.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```