const groupThePeople = require('./groupThePeople');

xdescribe('1282. Group the People Given the Group Size They Belong To', () => {

  it('should return a valid list of groups such that each person i is in a group of size groupSizes[i]', () => {
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

   expect(result.length).toBe(possibleGroups[0].length);

   result.forEach((group) => {
    let len = group.length;
    for (let i = 0; i < group.length; i++) {
      let index = group[i];
      expect(input[index]).toBe(len);
    }
   })
  });

  it('should return a list of groups', () => {
    let possibleGroup = [[1], [0,5], [2,3,4]];

    let input = [2, 1, 3, 3, 3, 2];
    let result = groupThePeople(input);

    expect(result.length).toBe(possibleGroup.length);

    result.forEach((group) => {
      let len = group.length;
      for(let i = 0; i < group.length; i++) {
        let index = group[i];
        expect(input[index]).toBe(len);
      }
    })
  })
})