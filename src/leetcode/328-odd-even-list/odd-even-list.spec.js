import { LinkedList } from '../../ds';
import oddEvenList from './odd-even-list';

it('oddEvenList', () => {
  expect(oddEvenList(LinkedList.fromArray([1]))).toEqual(
    LinkedList.fromArray([1])
  );
  expect(oddEvenList(LinkedList.fromArray([1, 2]))).toEqual(
    LinkedList.fromArray([1, 2])
  );
  expect(oddEvenList(LinkedList.fromArray([1, 2, 3, 4, 5]))).toEqual(
    LinkedList.fromArray([1, 3, 5, 2, 4])
  );
  expect(oddEvenList(LinkedList.fromArray([2, 1, 3, 5, 6, 4, 7]))).toEqual(
    LinkedList.fromArray([2, 3, 6, 7, 1, 5, 4])
  );
  expect(oddEvenList(LinkedList.fromArray([1, 1]))).toEqual(
    LinkedList.fromArray([1, 1])
  );
});
