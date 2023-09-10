const { ListNode } = require('../../definitions');
const linkedListIntersection = require('./linkedListIntersection');

xdescribe('26. Linked List Intersection', () => {

  it('should return the node of intersection for two lists of the same length', () => {
    var list1 = new ListNode('A');
    var nodeB = list1.next = new ListNode('B');
    var nodeC = nodeB.next = new ListNode('C');
    var nodeD = nodeC.next = new ListNode('D');
    var nodeE = nodeD.next = new ListNode('E');
    var nodeF = nodeE.next = new ListNode('F');
    var list2 = new ListNode('X');
    var nodeY = list2.next = new ListNode('Y');
    var nodeZ = nodeY.next = new ListNode('Z');
    nodeZ.next = nodeD;

    expect(linkedListIntersection(list1, list2)).toStrictEqual(nodeD);
  });

  it('should return the node of intersection for two lists of the different lengths', () => {
    var list1 = new ListNode('A');
    var nodeB = list1.next = new ListNode('B');
    var nodeC = nodeB.next = new ListNode('C');
    var nodeD = nodeC.next = new ListNode('D');
    var nodeE = nodeD.next = new ListNode('E');
    var nodeF = nodeE.next = new ListNode('F');
    var list2 = new ListNode('X');
    var nodeY = list2.next = new ListNode('Y');
    nodeY.next = nodeD;

    expect(linkedListIntersection(list1, list2)).toStrictEqual(nodeD);
  })

  it('should return null if lists do not intersect', () => {
    const list1 = new ListNode('A', new ListNode('B', new ListNode('C', new ListNode('D'))));
    const list2 = new ListNode('X', new ListNode('Y', new ListNode('Z')));

    expect(linkedListIntersection(list1, list2)).toBe(null);
  })

});