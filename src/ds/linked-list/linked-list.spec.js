import { ListNode, LinkedList } from './linked-list';

it('converts an array to a linked list', () => {
  const array = [1, 2, 3];
  const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
  expect(LinkedList.fromArray(array)).toEqual(expected);
});
