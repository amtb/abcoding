import { ListNode } from '../../ds';

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let list = null;
  let last = null;

  const push = (val) => {
    if (list === null) {
      list = new ListNode(val);
      last = list;
    } else {
      last.next = new ListNode(val);
      last = last.next;
    }
  };

  let curr = head;

  while (curr) {
    if (curr.val !== val) {
      push(curr.val);
    }

    curr = curr.next;
  }

  return list;
};

export default removeElements;
