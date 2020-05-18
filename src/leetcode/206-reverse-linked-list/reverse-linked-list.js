import { ListNode } from '../../ds';

/**
 * Reverses a singly-linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reverse = null;
  let curr = head;
  while (curr !== null) {
    const node = new ListNode(curr.val);
    if (reverse === null) {
      reverse = node;
    } else {
      // snip snap
      node.next = reverse;
      reverse = node;
    }

    // to the next node in the list
    curr = curr.next;
  }

  return reverse;
};

export default reverseList;
