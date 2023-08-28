const { getMinimumDifference, TreeNode } = require('./getMinimumDifference.js');

xdescribe('530. Minimum Absolute Difference in BST', () => {

  it('should return the minimum aboslute difference between the values of any two different nodes in the tree', () => {
    const tree1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))
    expect(getMinimumDifference(tree1)).toBe(1);

    const tree2 = new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)));
    expect(getMinimumDifference(tree2)).toBe(1);

    const tree3 = new TreeNode(236, new TreeNode(104), new TreeNode(744, new TreeNode(227), new TreeNode(911)));
    expect(getMinimumDifference(tree3)).toBe(9);
  });

});