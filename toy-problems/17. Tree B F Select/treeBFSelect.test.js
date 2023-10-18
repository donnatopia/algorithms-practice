const Tree = require('./treeBFSelect');

xdescribe('17. Tree B F Select', () => {

  it('should return a flatten array of node values of the tree for which the filter return true', () => {
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    branch2.addChild(4);
    branch2.addChild(5);
    branch3.addChild(6);
    branch3.addChild(7);

    let odd = root1.BFSelect(function (value) {
      return value % 2;
    });

    expect(odd).toStrictEqual([1, 3, 5, 7]);

    let depth1 = root1.BFSelect(function (value, depth) {
      return depth === 1;
    });

    expect(depth1).toStrictEqual([2, 3]);
  });

});