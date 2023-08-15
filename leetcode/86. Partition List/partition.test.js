const { ListNode } = require('../../definitions')
const partition = require('./partition');

describe('86. Partition List', () => {
  it('Test Case 1', () => {
    // Input: 1 -> 4 -> 3 -> 2 -> 5 -> 2, x = 3
    const head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
    const x = 3;
    const newHead = partition(head, x);
    // Expected Output: 1 -> 2 -> 2 -> 4 -> 3 -> 5
    expect(newHead).toEqual(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(5)))))));
  });

  it('Test Case 2', () => {
    // Input: 2 -> 4 -> 6 -> 8, x = 5
    const head = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8))));
    const x = 5;
    const newHead = partition(head, x);
    // Expected Output: 2 -> 4 -> 6 -> 8
    expect(newHead).toEqual(new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8)))));
  });

  it('Test Case 3', () => {
    // Input: 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1, x = 4
    const head = new ListNode(7, new ListNode(6, new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))))));
    const x = 4;
    const newHead = partition(head, x);
    // Expected Output: 3 -> 2 -> 1 -> 7 -> 6 -> 5 -> 4
    expect(newHead).toEqual(new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(7, new ListNode(6, new ListNode(5, new ListNode(4))))))));
  });
});