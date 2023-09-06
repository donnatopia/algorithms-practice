/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */

module.exports = (head, k) => {
  let nodes = new Map();
  let node = head;
  let index = 0;

  while (node) {
    nodes.set(index, node);
    index++;
    node = node.next;
  }

  const len = nodes.size > 0 ? Math.floor(nodes.size / k) : 1;
  let remainder = nodes.size % k;

  let result = [];
  let start = 0;

  for (let i = start; i < k; i++) {
    if (!nodes.get(start)) {
      result.push(null);
    } else {
      let partHead = nodes.get(start);

      let partTail;
      if (remainder > 0) {
        partTail = nodes.get(start + len);
        remainder--;
        start++;
      } else {
        partTail = nodes.get(start + len - 1);
      }

      partTail.next = null;
      result.push(partHead);
      start += len;
    }
  }

  return result;
}