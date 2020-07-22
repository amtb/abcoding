/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // map key = item, value = index
  const nodes = new Map();

  let copy;
  const copies = [];
  let tail;
  let curr = head;

  while (curr) {
    nodes.set(curr, copies.length);

    if (tail === undefined) {
      copy = new Node(curr.val);
      tail = copy;
    } else {
      tail.next = new Node(curr.val);
      tail = tail.next;
    }

    copies.push(tail);
    curr = curr.next;
  }

  // rewind
  curr = head;

  let currIndex = 0;
  while (curr) {
    if (curr.random !== null) {
      const randomIndex = nodes.get(curr.random);
      copies[currIndex].random = copies[randomIndex];
    } else {
      copies[currIndex].random = null;
    }

    currIndex += 1;
    curr = curr.next;
  }

  return copy;
};

export default copyRandomList;
