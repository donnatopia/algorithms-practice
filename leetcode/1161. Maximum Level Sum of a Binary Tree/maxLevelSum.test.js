const { maxLevelSum, TreeNode} = require('./maxLevelSum.js');

describe('1161. Maximum Level Sum of a Binary Tree', () => {

  it('should return maximum level sum of a binary tree', () => {
    let tree1 = new TreeNode(1, new TreeNode(7, new TreeNode(7), new TreeNode(-8)), new TreeNode(0))
    expect(maxLevelSum(tree1)).toBe(2);

    let tree2 = new TreeNode(989, null, new TreeNode(10250, new TreeNode(98693), new TreeNode(-89388, null, new TreeNode(-32127))))
    expect(maxLevelSum(tree2)).toBe(2);
  });

});