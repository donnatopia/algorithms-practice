const Tree = require('./treeCountLeaves');

xdescribe('11. Tree Count Leaves', () => {

  it('should return 1 if the tree root has no children', () => {
    var root = new Tree();
    expect(root.countLeaves()).toBe(1);
  });

  it('should return 1 if the root has 1 child', () => {
    var root = new Tree();
    root.addChild(new Tree());
    expect(root.countLeaves()).toBe(1);
  });

  it('should return 2 if the root has two children', () => {
    var root = new Tree();
    root.addChild(new Tree());
    root.addChild(new Tree());
    expect(root.countLeaves()).toBe(2);
  });

  it('should return 2 if one branch has one leaf', () => {
    var root = new Tree();
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    expect(root.countLeaves()).toBe(2);
  });

  it('should return 4 if both branches have two leafs', () => {
    var root = new Tree();
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[1].addChild(new Tree());
    root.children[1].addChild(new Tree());
    expect(root.countLeaves()).toBe(4);
  })

  it('should return the number of leaf nodes the tree contains', () => {
    var root = new Tree();
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    expect(root.countLeaves()).toBe(3);
  });

});