import mergeKLists from './merge-k-lists';
import { arrayToList } from '../../ds';

describe('mergeKLists', () => {
  it('works on empty lists', () => {
    expect(mergeKLists([arrayToList([]), arrayToList([])])).toEqual(
      arrayToList([])
    );

    expect(mergeKLists([arrayToList([]), arrayToList([1])])).toEqual(
      arrayToList([1])
    );
  });

  it('merges correctly', () => {
    expect(
      mergeKLists([arrayToList([1, 2, 4]), arrayToList([1, 3, 4])])
    ).toEqual(arrayToList([1, 1, 2, 3, 4, 4]));

    expect(
      mergeKLists([
        arrayToList([1, 4, 5]),
        arrayToList([1, 3, 4]),
        arrayToList([2, 6])
      ])
    ).toEqual(arrayToList([1, 1, 2, 3, 4, 4, 5, 6]));
  });
});
