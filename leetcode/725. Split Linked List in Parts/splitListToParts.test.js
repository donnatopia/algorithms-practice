const splitListToParts = require('./splitListToParts');
const { ListNode } = require('../../definitions');

xdescribe('725. Split Linked List in Parts', () => {

  it('should return an array of the k parts', () => {
    expect(splitListToParts(new ListNode(1, new ListNode(2, new ListNode(3))), 5)).toStrictEqual([new ListNode(1), new ListNode(2), new ListNode(3), null, null]);
    expect(splitListToParts(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10)))))))))), 3)).toStrictEqual([new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))), new ListNode(5, new ListNode(6, new ListNode(7))), new ListNode(8, new ListNode(9, new ListNode(10)))]);
  });

});