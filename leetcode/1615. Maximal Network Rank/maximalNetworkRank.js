/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

function Node () {
  this.freq = 1;
  this.links = new Set();
}

const maximalNetworkRank = (n, roads) => {
  let cities = {};

  for (let i = 0; i < roads.length; i++) {
    let node1 = roads[i][0];
    let node2 = roads[i][1];

    cities[node1] ? cities[node1].freq++ : cities[node1] = new Node();
    cities[node1].links.add(node2);

    cities[node2] ? cities[node2].freq++ : cities[node2] = new Node();
  }

  let maxRank = 0;
  for (let currentCity in cities) {
    for (let nextCity in cities) {
      if (nextCity === currentCity) {
        continue;
      } else {
        let currentRank = cities[currentCity].freq + cities[nextCity].freq;

        if (cities[currentCity].links.has(parseInt(nextCity)) || cities[nextCity].links.has(parseInt(currentCity))) {
          currentRank--;
        }

        maxRank = Math.max(currentRank, maxRank);
      }
    }
  }
  return maxRank;
}

module.exports = maximalNetworkRank;