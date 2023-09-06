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

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
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

## <a href='./splitListToParts.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```