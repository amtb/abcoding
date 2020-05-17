/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let length = 1;
  let nodeIndex = 1;
  let last = head;
  while (last && last.next) {
    last = last.next;
    length++;
  }

  // nothing to do
  if (length <= 2) {
    return head;
  }

  const isEven = (number) => {
    return number % 2 === 0;
  };

  let curr = head;
  while (curr && nodeIndex < length) {
    const next = curr.next;
    if (isEven(nodeIndex + 1)) {
      // even indexes
      // snip snap
      curr.next = next ? next.next : null;
      last.next = next;
      next.next = null;
      last = next;
      // skip because we changed the order
      nodeIndex += 1;
    }

    curr = curr.next;
    nodeIndex += 1;
  }

  return head;
};

export default oddEvenList;
