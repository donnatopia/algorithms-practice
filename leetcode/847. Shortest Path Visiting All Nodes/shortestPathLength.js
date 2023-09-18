/**
 * @param {number[][]} graph
 * @return {number}
 */

const shortestPathLength = (graph) => {
  const n = graph.length;
  const final = (1 << n) - 1;
  let visited = new Set();
  let queue = [];

  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i]);
    visited.add(`${i},${1 << i}`);
  }

  let steps = 0;

  while (queue.length) {
    let next = [];
    while (queue.length) {
      const [node, bitmask] = queue.pop();
      if (bitmask === final) return steps;
      for (let neighbor of graph[node]) {
        let updated = bitmask | (1 << neighbor);
        if (!visited.has(`${neighbor},${updated}`)) {
          next.push([neighbor, updated]);
          visited.add(`${neighbor},${updated}`);
        }
      }
    }
    queue = next;
    steps++;
  }
}

module.exports = shortestPathLength;