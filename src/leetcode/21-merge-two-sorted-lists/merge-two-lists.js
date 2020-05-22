import { ListNode } from '../../ds';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }

  // pointers pointing at the merged list
  let merge = null;
  let curr = null;

  let curr1 = l1;
  let curr2 = l2;

  while (curr1 && curr2) {
    let next;
    if (curr1.val < curr2.val) {
      next = new ListNode(curr1.val);
      curr1 = curr1.next;
    } else {
      next = new ListNode(curr2.val);
      curr2 = curr2.next;
    }

    if (merge === null) {
      merge = curr = next;
    } else {
      curr.next = next;
      curr = curr.next;
    }
  }

  // one of the lists was empty
  if (curr !== null) {
    curr.next = curr1 || curr2;
  } else {
    merge = curr1 || curr2;
  }

  return merge;
};

export default mergeTwoLists;
