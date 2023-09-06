const splitListToParts = require('./splitListToParts');
const { ListNode } = require('../../definitions');

xdescribe('725. Split Linked List in Parts', () => {

  it('should return an array of the k parts', () => {
    expect(splitListToParts(ListNode(1, ListNode(2, ListNode(3))), 5)).toStrictEqual([[1],[2],[3],[],[]]);
    expect(splitListToParts(ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, ListNode(6, ListNode(7, ListNode(8, ListNode(9, ListNode(10)))))))))), 3)).toStrictEqual([[1,2,3,4],[5,6,7],[8,9,10]]);
  });

});