import removeElements from './remove-elements';
import { LinkedList } from '../../ds';

it('removeElements', () => {
  const cases = [
    { in: { list: [1, 2, 6, 3, 4, 5, 6], val: 6 }, out: [1, 2, 3, 4, 5] },
    { in: { list: [1], val: 6 }, out: [1] },
    { in: { list: [1], val: 1 }, out: [] }
  ];

  cases.forEach((test) =>
    expect(
      removeElements(LinkedList.fromArray(test.in.list), test.in.val)
    ).toEqual(LinkedList.fromArray(test.out))
  );
});
