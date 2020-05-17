import { arrayToList } from '../../ds';
import addTwoNumbers from './add-two-numbers';

it('addTwoNumbers', () => {
  const left = arrayToList([2, 4, 3]);
  const right = arrayToList([5, 6, 4]);

  expect(addTwoNumbers(left, right)).toEqual(arrayToList([7, 0, 8]));

  const five = arrayToList([5]);
  expect(addTwoNumbers(five, five)).toEqual(arrayToList([0, 1]));
});
