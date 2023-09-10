/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode | null}
 */

const linkedListIntersection = (list1, list2) => {
  let node1 = list1;
  while (node1) {
    let node2 = list2;
    while(node2) {
      if (node1 === node2) return node1;
      node2 = node2.next;
    }
    node1 = node1.next;
  }
  return null;
}

module.exports = linkedListIntersection;
