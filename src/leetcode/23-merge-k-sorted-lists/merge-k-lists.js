import mergeTwoLists from '../21-merge-two-sorted-lists/merge-two-lists';

/**
 * O(kn) k = lists.length, n ~= a list size
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let merge = null;

  while (lists.length) {
    const last = lists.pop();
    merge = mergeTwoLists(merge, last);
  }

  return merge;
};

export default mergeKLists;
