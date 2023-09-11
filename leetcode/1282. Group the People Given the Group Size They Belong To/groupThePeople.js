/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

const groupThePeople = (groupSizes) => {
  let grouping = {};
  let additionalKey = groupSizes.length;

  for (let i = 0; i < groupSizes.length; i++) {
    let size = groupSizes[i];

    if (grouping[size]) {
      if (grouping[size].length === size) {
        grouping[additionalKey] = grouping[size];
        grouping[size] = [];
        additionalKey++;
      }
    } else {
      grouping[size] = [];
    }

    grouping[size].push(i);
  }

  return Object.values(grouping);
}

module.exports = groupThePeople;