/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Reverses a singly-linked list
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
