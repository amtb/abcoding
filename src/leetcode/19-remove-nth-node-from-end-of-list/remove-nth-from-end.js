function toArray(head) {
  const array = [];
  let curr = head;
  while (curr) {
    array.push(curr);
    curr = curr.next;
  }
  return array;
}

/**
 * O(n) n = list size :)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const nodes = toArray(head);
  const length = nodes.length;
  if (n > 0 && n <= length) {
    // remove head
    if (length === n) {
      head = head.next;
    } else {
      const toRemove = nodes[length - n];
      const previous = nodes[length - n - 1];

      previous.next = toRemove.next;
    }
  }
  return head;
};

export default removeNthFromEnd;
