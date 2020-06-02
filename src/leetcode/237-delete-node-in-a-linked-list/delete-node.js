/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let curr = node;
  let prev = node;
  while (curr.next) {
    curr.val = curr.next.val;
    prev = curr;
    curr = curr.next;
  }
  prev.next = null;
};

export default deleteNode;
