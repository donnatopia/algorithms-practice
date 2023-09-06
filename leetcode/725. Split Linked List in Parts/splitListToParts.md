# 725. Split Linked List in Parts

## <a href='https://leetcode.com/problems/split-linked-list-in-parts/?envType=daily-question&envId=2023-09-06'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given the `head` of a singly linked list and an integer `k`, split the linked list into `k` consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the `k` parts.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `head = [1,2,3], k = 5` | `[[1],[2],[3],[],[]]` |
| 2 | `head = [1,2,3,4,5,6,7,8,9,10], k = 3` | `[[1,2,3,4],[5,6,7],[8,9,10]]` |

### Constraints:

- The number of nodes in the list is in the range `[0, 1000]`.
- `0 <= Node.val <= 1000`
- `1 <= k <= 50`

## <a href='./splitListToParts.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 58 ms | 79.80% |
| Memory | 44.98 MB | 14.14% |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

  - I: head (ListNode), which contains a val and next (which points to another ListNode or null)
  - O: ListNode[] with a length of k
  - C:
    - each LinkedList part can only be 1+ greater in size
    - the larger parts are always in the front
  - E:
    - empty head would return the k number of empty LinkedLists

### Strategy
- Plan A (iterative):
  - iterate through all the elements in the list
  - place a reference to the node in a map as well as the index as the key
  - determine the size of the map
  - determine the size of each LinkedList part by dividing the size of the map with number of parts
  - store the value of the remainder
  - create an array
  - based on the size of each LinkedList, change the reference to the last item of that respective part and point to null
    - if there is still remainder, then add one more item to the last item
    - decrement the remainder
  - add the head of the newly truncated list to the array
  - move onto the next part and repeat the process
  - if there is no more parts, then just add null to the array
  - return the array

### Pseudocode
- Plan A (iterative):
  - create a map of nodes
  - define the currentNode as the head
  - define the nodeIndex as 0
  - while the currentNode exists
    - add the currentNode to the map with the nodeIndex as the key
    - increment the nodeIndex
    - update the currentNode to the nextNode
  - define the partsLength as the floor value of the size of the map divided by k
  - define the remainder as the modulo of the size divided by k
  - define a result array
  - if the partsLength is 0...
  - iterate from 0 to k, exclusive, incremeneted by partsLength
    - define the partHead as the node at the key of the iteration value
    - if partsHead does not exist
      - push an empty List to the array
      - break
    - if the value of remainder greater than 0
      - then define the partTail as the node at the iteration value + partsLength + 1
      - decrement the remainder
    - else
      - define the partsTail as node at teh iteration value + partsLength
    - set the next value at the partsTail to be null
    - add the partsHead to the array
  - return result array

## <a href='./splitListToParts.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```