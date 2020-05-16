import reverseList, { ListNode } from './reverse-linked-list';

const arrayToLinkedList = function (array) {
  let head = null;

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    const node = new ListNode(val);
    if (head === null) {
      head = node;
    } else {
      let curr = head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  return head;
};

it('reverseList', () => {
  expect(reverseList(arrayToLinkedList([]))).toEqual(arrayToLinkedList([]));
  expect(reverseList(arrayToLinkedList([1, 2, 3, 4, 5]))).toEqual(
    arrayToLinkedList([5, 4, 3, 2, 1])
  );
});
