/**
 * @param {number[][]} heights
 * @return {number}
 */

const minimumEffortPath = (heights) => {
  const n = heights.length;
  const m = heights[0].length;

  if (n === 1 && m === 1) return 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const maxEffortNeeded = Number.POSITIVE_INFINITY;
  const minEffortNeeded = 0;

  // Create a 2D array to track the minimum effort needed to reach each cell.
  const minEffortGrid = Array(n).fill().map(() => Array(m).fill(maxEffortNeeded));

  // Initialize the priority queue with the start cell.
  const queue = [[0, 0, minEffortNeeded]];

  while (queue.length > 0) {
    const [x, y, currentEffort] = queue.pop();

    // Mark the current cell as visited.
    minEffortGrid[x][y] = currentEffort;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        const nextEffort = Math.max(currentEffort, Math.abs(heights[x][y] - heights[newX][newY]));

        // If we found a better path to this cell, add it to the queue.
        if (nextEffort < minEffortGrid[newX][newY]) {
          minEffortGrid[newX][newY] = nextEffort;
          queue.push([newX, newY, nextEffort]);
        }
      }
    }
  }

  // The minimum effort needed to reach the destination is stored at the destination cell.
  return minEffortGrid[n - 1][m - 1];
};


module.exports = minimumEffortPath;