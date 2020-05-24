import { LinkedList } from '../../ds';
import reverseList from './reverse-linked-list';

it('reverseList', () => {
  expect(reverseList(LinkedList.fromArray([]))).toEqual(
    LinkedList.fromArray([])
  );
  expect(reverseList(LinkedList.fromArray([1, 2, 3, 4, 5]))).toEqual(
    LinkedList.fromArray([5, 4, 3, 2, 1])
  );
});
