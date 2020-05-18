import { arrayToList } from '../../ds';
import oddEvenList from './odd-even-list';

it('oddEvenList', () => {
  expect(oddEvenList(arrayToList([1]))).toEqual(arrayToList([1]));
  expect(oddEvenList(arrayToList([1, 2]))).toEqual(arrayToList([1, 2]));
  expect(oddEvenList(arrayToList([1, 2, 3, 4, 5]))).toEqual(
    arrayToList([1, 3, 5, 2, 4])
  );
  expect(oddEvenList(arrayToList([2, 1, 3, 5, 6, 4, 7]))).toEqual(
    arrayToList([2, 3, 6, 7, 1, 5, 4])
  );
  expect(oddEvenList(arrayToList([1, 1]))).toEqual(arrayToList([1, 1]));
});
