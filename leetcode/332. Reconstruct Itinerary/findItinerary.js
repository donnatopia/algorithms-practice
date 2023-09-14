/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

const findItinerary = (tickets) => {
  let tracker = {};

  for (let [depart, arrival] of tickets) {
    if (tracker[depart]) {
      tracker[depart].push(arrival);
    } else {
      tracker[depart] = [arrival];
    }
  }

  for (let airport in tracker) {
    tracker[airport].sort();
  }

  let itinerary = [];

  const dfs = (airport) => {
    while (tracker[airport] && tracker[airport].length > 0) {
      dfs(tracker[airport].shift());
    }
    itinerary.push(airport);
  }

  dfs("JFK");

  return itinerary.reverse();
}

module.exports = findItinerary;