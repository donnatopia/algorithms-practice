const { TreeNode } = require('../../definitions');
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

module.exports = (n) => {
  const mem = new Map();

  const treeGenerator = (start, end) => {
    if (mem.has(`[${start}, ${end}]`)) {
      return mem.get(`[${start}, ${end}]`)
    }

    const trees = [];

    if (start > end) {
      trees.push(null);
      return trees;
    }

    for (let root = start; root <= end; root++) {
      const left_trees = treeGenerator(start, root - 1);
      const right_trees = treeGenerator(root + 1, end);

      for (let left_tree of left_trees) {
        for (let right_tree of right_trees) {
          const tree = new TreeNode(root, left_tree, right_tree);
          trees.push(tree);
        }
      }
    }

    mem.set(`[${start}, ${end}]`, trees);
    return trees;
  }

  return treeGenerator(1, n);
}