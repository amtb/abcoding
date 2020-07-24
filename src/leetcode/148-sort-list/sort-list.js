import { ListNode } from '../../ds';

/**
 * TODO: implement using mergesort
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return head;

  let list, tail;

  const insert = (value) => {
    if (!list) {
      list = new ListNode(value);
      tail = list;
    } else {
      const node = new ListNode(value);
      if (list.val >= value) {
        node.next = list;
        list = node;
      } else if (tail.val <= value) {
        tail.next = node;
        tail = node;
      } else {
        let curr, prev;
        curr = prev = list;
        while (curr && curr.val < value) {
          prev = curr;
          curr = curr.next;
        }

        node.next = prev.next;
        prev.next = node;
      }
    }
  };

  let curr = head;
  while (curr) {
    insert(curr.val);
    curr = curr.next;
  }

  return list;
};

export default sortList;
