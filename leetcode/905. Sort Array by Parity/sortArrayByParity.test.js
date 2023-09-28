const sortArrayByParity = require('./sortArrayByParity');

xdescribe('905. Sort Array By Parity', () => {

  it('should return any array that smoves all the even integers to the beginning of the array', () => {
    expect(sortArrayByParity([3,1,2,4])).toStrictEqual([4, 2, 3, 1]);
  });

  it('should return the same array if there are no odd numbers', () => {
    expect(sortArrayByParity([0])).toStrictEqual([0]);
  })

});