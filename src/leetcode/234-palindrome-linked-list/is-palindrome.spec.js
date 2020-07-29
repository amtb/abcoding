import isPalindrome, { esPalindrome } from './is-palindrome';
import { LinkedList } from '../../ds';

it('isPalindrome', () => {
  const fns = [isPalindrome, esPalindrome];
  const cases = [
    { list: [], result: true },
    { list: [1], result: true },
    { list: [1, 2, 2, 1], result: true },
    { list: [1, 2, 3, 2, 1], result: true },
    { list: [1, 2], result: false },
    { list: [1, 2, 3], result: false }
  ];

  cases.forEach(({ list, result }) =>
    fns.forEach((fn) => expect(fn(LinkedList.fromArray(list))).toBe(result))
  );
});
