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

// // time complexity is O(n)
// // space complexity is O(1)
// const linkedListIntersectionSoln = (list1, list2) => {
//   // determine which is the longer list
//   const length1 = getLinkedListLength(list1);
//   const length2 = getLinkedListLength(list2);

//   let diff = Math.abs(length1 - length2);
//   let long = length1 >= length2 ? list1 : list2;
//   let short = length1 >= length2 ? list2 : list1;

//   // iterate through the two list while they exist
//   while (long && short) {
//     // if the list length is still greater
//     // move onto the next node of long
//     if (diff > 0) {
//       long = long.next;
//       diff--;
//       continue;
//     }

//     // check to see if the list are the same
//     if (long === short) return long;

//     // else, check the next node
//     long = long.next;
//     short = short.next;
//   }

//   // afterwards, return null
//   return null;
// }

// const getLinkedListLength = (list) => {
//   if (list.next === null) return 1;
//   return 1 + getLinkedListLength(list.next);
// }