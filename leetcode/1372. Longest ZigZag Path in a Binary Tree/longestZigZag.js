/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

const longestZigZag = (root) => {

  const trackLeft = (node) => {
    if (node.left) {
      return 1 + trackRight(node.left);
    } else {
      return 0;
    }
  }

  const trackRight = (node) => {
    if (node.right) {
      return 1 + trackLeft(node.right);
    } else {
      return 0;
    }
  }

  let longestFromCurrent = Math.max(trackLeft(root), trackRight(root));
  let longestFromLeft = root.left ? longestZigZag(root.left) : 0;
  let longestFromRight = root.right ? longestZigZag(root.right) : 0;

  return Math.max(longestFromCurrent, longestFromLeft, longestFromRight);
}


module.exports = longestZigZag;