import mergeTwoLists from './merge-two-lists';
import { arrayToList } from '../../ds';

describe('mergeTwoLists', () => {
  it('works on empty lists', () => {
    expect(mergeTwoLists(arrayToList([]), arrayToList([]))).toEqual(
      arrayToList([])
    );

    expect(mergeTwoLists(arrayToList([]), arrayToList([1]))).toEqual(
      arrayToList([1])
    );
  });

  it('merges correctly', () => {
    expect(
      mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4]))
    ).toEqual(arrayToList([1, 1, 2, 3, 4, 4]));
  });
});
