import { LinkedList } from '../../ds';
import addTwoNumbers from './add-two-numbers';

it('addTwoNumbers', () => {
  const left = LinkedList.fromArray([2, 4, 3]);
  const right = LinkedList.fromArray([5, 6, 4]);

  expect(addTwoNumbers(left, right)).toEqual(LinkedList.fromArray([7, 0, 8]));

  const five = LinkedList.fromArray([5]);
  expect(addTwoNumbers(five, five)).toEqual(LinkedList.fromArray([0, 1]));
});
