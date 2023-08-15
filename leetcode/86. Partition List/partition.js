const { ListNode } = require('../../definitions');
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

module.exports = (head, x) => {
  let lesserStart = new ListNode(0);
  let greaterStart = new ListNode(0);

  let lesserEnd = lesserStart;
  let greaterEnd = greaterStart;

  let currentNode = head;

  while(currentNode) {
    if (currentNode.val < x) {
      lesserEnd.next = currentNode;
      lesserEnd = lesserEnd.next;
    } else {
      greaterEnd.next = currentNode;
      greaterEnd = greaterEnd.next;
    }
    currentNode = currentNode.next;
  }

  greaterEnd.next = null;
  lesserEnd.next = greaterStart.next;

  return lesserStart.next;
}