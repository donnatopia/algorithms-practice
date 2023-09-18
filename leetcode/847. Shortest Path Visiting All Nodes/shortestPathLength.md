# 847. Shortest Path Visiting All Nodes

## <a href='https://leetcode.com/problems/shortest-path-visiting-all-nodes/?envType=daily-question&envId=2023-09-17'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You have an undirected, connected graph of `n` nodes labeled from `0` to `n - 1`. You are given an array `graph` where `graph[i]` is a list of all the nodes connected with node `i` by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `graph = [[1,2,3],[0],[0],[0]]` | `4` |
| 2 | `graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]` | `4` |

### Constraints:

- `n == graph.length`
- `1 <= n <= 12`
- `0 <= graph[i].length < n`
- `graph[i]` does not contain `i`.
- If `graph[a]` contains `b`, then `graph[b]` contains `a`.
- The input graph is always connected.

## <a href='shortestPathLength.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 149 ms | 27.60% |
| Memory | 62.37 MB | 23.98% |

### Time and Space Complexity
  - Time Complexity: `O(V * (V + E))`
    - the first for loop runs for the length of graph, which is n
    - the outer while loop, which visits every node and edge in the graph, so the time complexity is O(V + E), where V is the nodes and E is the edges
      - the inner while loop runs through all the nodes in graph, which is O(V)
  - Space Complexity: `O(V)`
    - visited, queue, and next can have up to O(V) elements each

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
    - each index represents a node and the element of each index is an array of nodes that connect to the current node
  - O:
    - minimum number of steps to reach all the nodes
  - C: N/A
  - E: singular node => steps is 0

### Strategy
- Plan A (BFS w/ Bitmask):
  - visit each node using BFS
  - keep track of each node visited using a bitmask
    - mark 1 in bitmask if the node has been visited
    - i.e. for two nodes,
        2  1  0  <-- indices
        1  0  0  <-- bitmask (only visited node 2)
  - keep track of the number of steps
  - as we are visiting each node
    - update the bitmask to reflect the node has been visited
        2  1  0  <-- indices
        1  1  0  <-- bitmask (visited both node 2 and 1)
  - return the steps once the bitmask represents all the nodes have been visited
        2  1  0  <-- indices
        1  1  1  <-- bitmask (visited all nodes)

### Pseudocode
- define the final bitmask as 1 << n, where n is the length of graph
- define a queue as an empty array
- define visited as a new set
- iterate thorugh the length of graph
  - add to the queue, the node and bitmask
  - add to visited set

- set steps to 0
- while the queue still has elements
  - set next to an empty array
  - while the queue still has length
    - set the node and bitmask to the last element of the queue
    - if the bitmask equals the fullbitmask return steps
    - iterate through all the neighbors of the graph at the node
      - define the new bitmask using the OR operator
      - if the visiter does not already have the neighbor and new bitmask
        - add this to the queue
        - add this to the visited set
  - set the queue to next
  - increment steps
- return steps

### Notes
- 1 << n means to displace the number 1 n spaces
  - if n = 2, then it would return 100 => 4
- use the bitwise OR operation to update the bitmask
  - if visit node 2: 100
  - if visit node 1: 010
  - if visit node 2 and 1, then using the bitwise OR operation (2 | 1), we get 110

## <a href='shortestPathLength.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```