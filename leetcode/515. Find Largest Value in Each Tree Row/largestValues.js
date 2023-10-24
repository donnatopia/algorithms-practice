/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const largestValues = (root) => {
  let largest = [];
  let row = [];

  if (root) {
    row.push(root);
    largest.push(root.val);
  }

  while (row.length > 0) {
      let children = [];

      for (let i = 0; i < row.length; i++) {
          let node = row[i];
          if (node.left) children.push(node.left);
          if (node.right) children.push(node.right);
      }

      if (children.length === 0) break;

      largest.push(children.reduce((max, child) => {
        return Math.max(max, child.val)
      }, Number.NEGATIVE_INFINITY));

      row = children;
  }

  return largest;
}

module.exports = largestValues;