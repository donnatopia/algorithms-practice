/**
 * @param {Array} child
 * @param {Array} parent
 * @return {boolean}
 */

const isSubsetOf = (children, parents) => {
  let parentSet = new Set();

  for (let i = 0; i < parents.length; i++) {
    let parent = JSON.stringify(parents[i])
    parentSet.add(parent);
  }

  for (let i = 0; i < children.length; i++) {
    let child = JSON.stringify(children[i]);
    if (!parentSet.has(child)) return false;
  }
  return true;
}

module.exports = isSubsetOf;
