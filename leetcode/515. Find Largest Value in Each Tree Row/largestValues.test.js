const { TreeNode } = require('../../definitions');
const largestValues = require('./largestValues');

xdescribe('515. Find Largest Value in Each Tree Row', () => {

  it('should return an array of the largest value in each row of a tree', () => {
     // Example 1
     const root1 = new TreeNode(1);
     root1.left = new TreeNode(3);
     root1.right = new TreeNode(2);
     root1.left.left = new TreeNode(5);
     root1.left.right = new TreeNode(3);
     root1.right.right = new TreeNode(9);
     expect(largestValues(root1)).toEqual([1, 3, 9]);

     // Example 2
     const root2 = new TreeNode(1);
     root2.left = new TreeNode(2);
     root2.right = new TreeNode(3);
     expect(largestValues(root2)).toEqual([1, 3]);

     // Edge case: empty tree
     const root3 = null;
     expect(largestValues(root3)).toEqual([]);

     // Edge case: tree with a single node
     const root4 = new TreeNode(5);
     expect(largestValues(root4)).toEqual([5]);
  });

});