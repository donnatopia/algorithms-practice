const groupThePeople = require('./groupThePeople');

xdescribe('1282. Group the People Given the Group Size They Belong To', () => {

  it('should return a list of groups such that each person i is in a group of size groupSizes[i]', () => {
    let possibleGroups = [
      [[5], [0, 1, 2], [3, 4, 6]],
      [[5], [0, 1, 3], [2, 4, 6]],
      [[5], [0, 1, 4], [2, 3, 6]],
      [[5], [0, 1, 6], [2, 4, 3]],
      [[5], [0, 2, 3], [1, 4, 6]],
      [[5], [0, 2, 4], [1, 3, 6]],
      [[5], [0, 2, 6], [1, 4, 3]],
      [[5], [0, 3, 4], [1, 2, 6]],
      [[5], [0, 3, 6], [1, 2, 4]],
      [[5], [0, 4, 6], [1, 2, 3]],
    ];

    let input = [3, 3, 3, 3, 3, 1, 3];
    let result = groupThePeople(input);

    // Check if the result matches any of the possible groupings
    expect(possibleGroups.some(grouping => arraysEqual(result, grouping))).toBe(true);
  });

  // Define a helper function to check if two arrays of arrays are equal
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (!arraysContainSameElements(arr1[i], arr2[i])) return false;
    }
    return true;
  }

  // Define a helper function to check if two arrays contain the same elements, ignoring order
  function arraysContainSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const set1 = new Set(arr1);
    for (let element of arr2) {
      if (!set1.has(element)) return false;
    }
    return true;
  }
  });

})