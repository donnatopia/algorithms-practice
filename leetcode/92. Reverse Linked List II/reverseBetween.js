const { ListNode } = require('../../definitions');

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

const reverseBetween = function(head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let start = dummy;

  for (let i = 0; i < left - 1; i++) {
    start = start.next;
  }

  let current = start.next;

  for (let i = left; i < right; i++) {
    let next = current.next;
    current.next = next.next;
    next.next = start.next;
    start.next = next;
  }

  return dummy.next;
};

module.exports = reverseBetween;