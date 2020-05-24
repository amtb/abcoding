/**
 * singly linked list node
 */
export class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this._last = null;
  }

  insert(value) {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = this._last = node;
    } else {
      this._last.next = node;
      this._last = node;
    }
  }

  /**
   * @param {any[]} array
   */
  static fromArray(array) {
    const list = new LinkedList();
    array.forEach((item) => list.insert(item));
    return list.head;
  }
}
