import addTwoNumbers, { ListNode } from './add-two-numbers';

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

it('addTwoNumbers', () => {
  const left = arrayToLinkedList([2, 4, 3]);
  const right = arrayToLinkedList([5, 6, 4]);

  expect(addTwoNumbers(left, right)).toEqual(arrayToLinkedList([7, 0, 8]));

  const five = arrayToLinkedList([5]);
  expect(addTwoNumbers(five, five)).toEqual(arrayToLinkedList([0, 1]));
});
