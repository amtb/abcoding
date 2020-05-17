import { ListNode, arrayToList } from './linked-list';

it('arrayToList', () => {
  const array = [1, 2, 3];
  const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
  expect(arrayToList(array)).toEqual(expected);
});
