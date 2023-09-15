/**
 * @param {number[][]} points
 * @return {number}
 */

const minCostConnectPoints = (points) => {
  let cost = 0;

  const findMinDistance = (seen) => {
    if (seen.size === points.length) return;
    let minDistance = Number.POSITIVE_INFINITY;
    let addIndex = 1;

    seen.forEach((point) => {
      let [x1, y1] = point;
      for (let i = 1; i < points.length; i++) {
        if (!seen.has(points[i])) {
          let [x2, y2] = points[i];
          let distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);
          if (distance < minDistance) {
            minDistance = distance;
            addIndex = i;
          }
        }
      }
    })

    cost += minDistance;
    seen.add(points[addIndex]);
    findMinDistance(seen);
  }

  let seen = new Set();
  seen.add(points[0]);
  findMinDistance(seen);

  return cost;
}

module.exports = minCostConnectPoints;