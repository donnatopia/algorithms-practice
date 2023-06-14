/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const sortNode = (node) => {
  let ordered = [node.val];
  if (node.left) {
    ordered = sortNode(node.left).concat(ordered);
  }

  if (node.right) {
    ordered = ordered.concat(sortNode(node.right));
  }

  return ordered;
}

const getMinimumDifference = (root) => {
  let min = Number.POSITIVE_INFINITY;
  const ordered = sortNode(root);
  for (let i = 1; i < ordered.length; i++) {
    let difference = Math.abs(ordered[i] - ordered[i - 1]);
    if (difference === 1) { return 1; }
    min = Math.min(min, difference);
  }
  return min;
}

module.exports = { getMinimumDifference, TreeNode };