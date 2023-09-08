const generate = require('./generate');

xdescribe('118. Pascal\'s Triangle', () => {

  it('should return a matrix of given numOfRows consisting of Pascal\'s triangle numbers', () => {
    expect(generate(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    expect(generate(1)).toStrictEqual([[1]]);
  });

});