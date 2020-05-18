import { arrayToList } from '../../ds';
import reverseList from './reverse-linked-list';

it('reverseList', () => {
  expect(reverseList(arrayToList([]))).toEqual(arrayToList([]));
  expect(reverseList(arrayToList([1, 2, 3, 4, 5]))).toEqual(
    arrayToList([5, 4, 3, 2, 1])
  );
});
