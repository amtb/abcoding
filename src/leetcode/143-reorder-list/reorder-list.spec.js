import { LinkedList } from '../../ds';
import reorderList from './reorder-list';

it('reorderList', () => {
  const list1 = LinkedList.fromArray([1, 2, 3, 4]);
  reorderList(list1);
  expect(list1).toEqual(LinkedList.fromArray([1, 4, 2, 3]));

  const list2 = LinkedList.fromArray([1, 2, 3, 4, 5]);
  reorderList(list2);
  expect(list2).toEqual(LinkedList.fromArray([1, 5, 2, 4, 3]));
});
