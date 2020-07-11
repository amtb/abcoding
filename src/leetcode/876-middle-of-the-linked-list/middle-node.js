/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const nodes = [];
  let curr = head;
  while (curr !== null) {
    nodes.push(curr);
    curr = curr.next;
  }

  const length = nodes.length;
  return nodes[Math.floor(length / 2)];
};

export default middleNode;
