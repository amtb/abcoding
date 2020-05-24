import { LinkedList } from '../../ds';
import removeNthFromEnd from './remove-nth-from-end';

it('removeNthFromEnd', () => {
  expect(removeNthFromEnd(LinkedList.fromArray([1, 2, 3, 4, 5]), 2)).toEqual(
    LinkedList.fromArray([1, 2, 3, 5])
  );
});
