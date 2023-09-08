# 92. Reverse Linked List II

## <a href='./reverseBetween.js'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `head = [1,2,3,4,5], left = 2, right = 4` | `[1,4,3,2,5]` |
| 2 | `head = [5], left = 1, right = 1` | `[5]` |

### Constraints:

- The number of nodes in the list is `n`.
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

## <a href='./reverseBetween.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 51 ms | 65.53% |
| Memory | 42.39 MB | 25.53% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - traversal down the list with the for loops is linear, where n is the length of right
  - Space Complexity: `O(1)`
    - data structures are constant regardless of the length of the list

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - head (ListNode)
    - left (number)
    - right (number)
  - O:
    - ListNode where the linkedlist is reversed from node left to right
  - C: N/A
  - E:
    - if left and right equal each other => return same head

### Strategy
- Plan A:
  - base case
    - if left and right are the same, return the same head
    - keep count of which node you are on
    - iterate through nodes until you get to the left node number and stop at right node number
      - denote this node as the tail
      - at the next iteration
        - get the next node and set the next value to the tail
        - keep doing this until you reach the right node
      - at the right node
        - denote the next value of the tail end of the first half to right node
        - denote the next value of the tail end of the reverse section to the upcoming node
    - return the head

- Plan B (two pointers):
  - set the base case
    - if the head doesn't exist or left and right are equal => return the head

  - the first pointer stops at the node before the left node (prev)
  - the second pointer is where the current node is

  - set the first pointer as the node before the left node
    - use a dummy node, in case there is only one node in the list
  - set the second pointer at the left node (current node)
    - set the next node as the next instance of the left node
    - reassign the next instance of the current node to the next instance of the next node
    - reassign the next instance of the next node to the next instance of the first pointer
    - reassign the next instance of the first pointer to the next node
  - stop the cycle of the current node once current node has reached the right node
  - return the next instance of the dummy node



### Pseudocode
- Plan A:
  - if the left and right are the same => return the head
  - set the nodeCount to 1;
  - set the currentNode to the head
  - set the firstTail to the head
  - set the invertedHead to head
  - set the invertedTail to the head
  - while the currentNode exists and nodeCount is less than or equal to right
    - if the nodeCount is less than left
      - set the currentNode to the next value
      - increment the nodeCount
      - continue

    - if the nodeCount is left
      - set the invertedTail to currentNode
      - set the invertedHead to the currentNode
      - continue

    - set the currentNode's next to the invertedHead
    - set invertedHead to the currentNode

  - connect the firstTail to the invertedHead
  - connect the invertedTail to the currentNode.next

- Plan B (two pointers):
  - if the head doesn't exist or left is equal to right, then return the head
  - define a dummy node as a new ListNode
  - set the next instance of the dummy node as the head
  - set the first pointer, named start, to the dummy
  - iterate from 0 to left - 1, exclusive
    - reassign start to the next instance of start => start should be value right before left
  - set the second pointer, named current, to the next instance of start
  - iterate from left - 1 to right, exclusive
    - set the next node as the next instance of current
    - reassign current.next to next.next
    - reassign next.next to start.next
    - reassign start.next to next
  - return dummy.next

## <a href='./reverseBetween.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```