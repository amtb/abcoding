import mergeTwoLists from './merge-two-lists';
import { LinkedList } from '../../ds';

describe('mergeTwoLists', () => {
  it('works on empty lists', () => {
    expect(
      mergeTwoLists(LinkedList.fromArray([]), LinkedList.fromArray([]))
    ).toEqual(LinkedList.fromArray([]));

    expect(
      mergeTwoLists(LinkedList.fromArray([]), LinkedList.fromArray([1]))
    ).toEqual(LinkedList.fromArray([1]));
  });

  it('merges correctly', () => {
    expect(
      mergeTwoLists(
        LinkedList.fromArray([1, 2, 4]),
        LinkedList.fromArray([1, 3, 4])
      )
    ).toEqual(LinkedList.fromArray([1, 1, 2, 3, 4, 4]));
  });
});
