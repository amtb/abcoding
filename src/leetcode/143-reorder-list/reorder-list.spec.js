import { arrayToList } from '../../ds';
import reorderList from './reorder-list';

it('reorderList', () => {
  const list1 = arrayToList([1, 2, 3, 4]);
  reorderList(list1);
  expect(list1).toEqual(arrayToList([1, 4, 2, 3]));

  const list2 = arrayToList([1, 2, 3, 4, 5]);
  reorderList(list2);
  expect(list2).toEqual(arrayToList([1, 5, 2, 4, 3]));
});
