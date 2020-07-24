import { LinkedList } from '../../ds';
import sortList from './sort-list';

it('sortList', () => {
  expect(sortList(LinkedList.fromArray([4, 2, 1, 3]))).toEqual([1, 2, 3, 4]);
});
