# 86. Partition List

## <a href='https://leetcode.com/problems/partition-list/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`.

You should preserve the original relative order of the nodes in each of the two partitions.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `head = [1,4,3,2,5,2], x = 3` | [1,2,2,4,3,5]` |
| 2 | `head = [2,1], x = 2` | `[1, 2]` |

### Constraints:

- The number of nodes in the list is in the range `[0, 200]`.
- `-100 <= Node.val <= 100`
- `-200 <= x <= 200`

## <a href='./partition.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 66 ms | 31.35% |
| Memory | 43.36 MB | 90.37% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iteration through the entire length of the list has linear time complexity
  - Space Complexity: `O(n)`
    - the length of the lesser and greater partition is equal to the length of the original list + 2, which simplifies to linear space complexity

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - head (ListNode): which has a val and next value
    - x (number): pivot point
  - O:
    - head (ListNode): modified such that reassignment of ListNode revolve around pivotValue and greater
  - C:
    - preserve the original relative order in each of the two partitions
  - E: N/A

### Strategy
- Plan A:
  - need to keep track of the end of the first partition
    - the first partition consists of values less than x
  - need a pointer that runs through the length of the list
    - if the current value is less than x, then reassign the node at the end of the first partition
      - this.next of the first partition node will refer to the current node
      - this.next of the current node will now refer to whatever the this.next of the first partition used to refer to

- Plan B:
  - create a start for the lesser partition
  - create a start for the greater partition
  - create an end for the lesser partition
  - create an end for the greater partition
  - define the currentNode
  - while the currentNode exists
    - update the lesser partition if the currentNode value is less than x
    - update the greater partition if the currentNode value is greater than or equal to x
    - increment the currentNode
  - connect the lesser partition end to the greater partition beginning
  - redefine the greater partition end as null
  - return the start of the lesser partition

### Pseudocode
- Plan A:
  - define the currentNode as the head
  - define the lesserEnd as the currentNode
  - while the currentNode has a next value
    - if the currentNode's value is less than x
      - define greaterBegin as the this.next of lesserEnd
      - define nextNode as the this.next of currentNode
      - reassign the this.next of lesserEnd to currentNode
      - reassign the this.next of currentNode to greaterBegin
      - assign currentNode to nextNode
  - return head

- Plan B:
  - define the lesserStart as a ListNode with value of 0
  - define the greaterStart as a ListNode with value of 0
  - define the lesserEnd as the lesserStart
  - define the greaterEnd as the greaterStart
  - define the currentNode as the head
  - while the currentNode exists
    - if the currentNode's value is less than x
      - set the lesserEnd next value to the currentNode
      - set the lesserEnd to the lessEnd's nextValue
    - else
      - set the greaterEnd next value to the currentNode
      - set the greaterEnd to the greaterEnd's nextValue
    - set the currentNode to the currentNode.next
  - set the greaterEnd's next value to null
  - set the lesserEnd's next value to greaterStart
  - return the lesserStart.next value

## <a href='./partition.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```