import middleNode from './middle-node';
import { LinkedList } from '../../ds';

it('middleNode', () => {
  const cases = [
    { in: [1, 2, 3, 4, 5], out: [3, 4, 5] },
    { in: [1, 2, 3, 4, 5, 6], out: [4, 5, 6] },
    { in: [5], out: [5] }
  ];

  cases.forEach((c) =>
    expect(middleNode(LinkedList.fromArray(c.in))).toEqual(
      LinkedList.fromArray(c.out)
    )
  );
});
