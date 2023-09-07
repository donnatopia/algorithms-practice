const { ListNode } = require('../../definitions');
const reverseBetween = require('./reverseBetween');

xdescribe('92. Reverse Linked List II', () => {

  it('should return the list inverted at the point left and right', () => {
    let input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    let expected = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5)))));

    expect(reverseBetween(input, 2, 4)).toStrictEqual(expected);
  });

  it('should return the same list if the left and right are the same', () => {
    expect(reverseBetween(new ListNode(5), 1, 1)).toStrictEqual(new ListNode(5));
  })

});