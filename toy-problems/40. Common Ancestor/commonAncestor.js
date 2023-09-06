var Tree = function() {
  this.children = [];
};

/**
 * @param { Tree } n1
 * @param { Tree } n2
 * @return { Tree }
*/
Tree.prototype.getClosestCommonAncestor = function(node1, node2) {
  const path1 = this.getAncestorPath(node1);
  const path2 = this.getAncestorPath(node2);

  if (!path1 || !path2) return null;

  let commonAncestor = null;
  for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
    if (path1[i] === path2[i]) {
      commonAncestor = path1[i];
    } else {
      break;
    }
  }

  return commonAncestor;
};

/**
 * @param { Tree } relative
 * @return { Tree[]}
*/
Tree.prototype.getAncestorPath = function(relative) {
  let ancestorPath = [];

  (function search(node) {
    ancestorPath.push(node);
    if (node === relative) {
      return true;
    }

    for (let i = 0; i < node.children.length; i++) {
      if (search(node.children[i])) {
        return true;
      }
    }

    ancestorPath.pop();

    return false;
  })(this);

  return ancestorPath.includes(relative) ? ancestorPath : null;
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
*/
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

module.exports = Tree;
