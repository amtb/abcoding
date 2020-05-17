/**
 * singly linked list node
 */
export class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

/**
 * converts an array to a linked list
 * @param {any[]} array
 */
export function arrayToList(array) {
  let head = null;

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    const node = new ListNode(val);
    if (head === null) {
      head = node;
    } else {
      let curr = head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  return head;
}
