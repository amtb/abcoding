/**
 * Definition for singly-linked list.
 */
export function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const add = (left, right, carry = 0) => {
    if (left || right) {
      const v1 = left ? left.val : 0;
      const v2 = right ? right.val : 0;
      let total = v1 + v2 + carry;

      // next carry
      carry = total >= 10 ? 1 : 0;
      total = total % 10;

      const nl = left ? left.next : null;
      const nr = right ? right.next : null;

      const node = new ListNode();
      node.val = total;
      node.next = add(nl, nr, carry);

      return node;
    }

    if (left === null && right === null && carry !== 0) {
      return new ListNode(carry);
    }

    return null;
  };

  const sum = add(l1, l2, 0);
  return sum;
};

export default addTwoNumbers;
