/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const maxLevelSum = (root) => {
  let maxSum = root.val;
  let level = 1;

  const checkNextLevel = (nodes, currLevel) => {
    let currSum = 0;
    let nextNodes = [];

    for (let i = 0; i < nodes.length; i++) {
      currSum += nodes[i].val;
      if (nodes[i].left) { nextNodes.push(nodes[i].left); }
      if (nodes[i].right) { nextNodes.push(nodes[i].right); }
    }

    if (currSum > maxSum) {
      level = currLevel;
      maxSum = currSum;
    }

    if (nextNodes.length > 0) {
      checkNextLevel(nextNodes, currLevel + 1);
    }
  }

  let nextNodes = [];
  if (root.left) { nextNodes.push(root.left); }
  if (root.right) { nextNodes.push(root.right); }

  checkNextLevel(nextNodes, 2);
  return level;
}

module.exports = { TreeNode, maxLevelSum }