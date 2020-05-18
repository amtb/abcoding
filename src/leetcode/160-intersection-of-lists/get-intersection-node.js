/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const nodesA = new Set();

  let curr = headA;
  while (curr) {
    nodesA.add(curr);
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (nodesA.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
};

export default getIntersectionNode;
