/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const nodes = [];

  let curr = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  // rewind
  curr = head;
  const half = nodes.length / 2;
  for (let i = nodes.length - 1; i > half; i--) {
    const last = nodes[i];
    nodes[i - 1].next = last.next;
    last.next = curr.next;
    curr.next = last;
    curr = last.next;
  }
};

export default reorderList;
