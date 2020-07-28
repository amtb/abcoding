/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const values = [];

  let curr = head;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  let i = 0;
  let j = values.length - 1;

  while (i < j && values[i] === values[j]) {
    i++;
    j--;
  }

  return i >= j;
};

export function esPalindrome(head) {
  let slow;
  let fast;

  slow = fast = head;

  // hop twice ... fast = end => slow = middle.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let tail;
  while (slow) {
    tail = slow;
    slow = slow.next;
    if (slow) slow.prev = tail;
  }

  // rewind
  slow = head;

  while (slow && tail && slow !== tail) {
    if (slow.val !== tail.val) return false;
    slow = slow.next;
    tail = tail.prev;
  }

  return true;
}

export default isPalindrome;
