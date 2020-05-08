/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const items = new Map();
  let curr = head;
  while (curr != null) {
    if (items.has(curr)) {
      return true;
    }
    items.set(curr, 'something');
    curr = curr.next;
  }

  return false;
};

export default hasCycle;
