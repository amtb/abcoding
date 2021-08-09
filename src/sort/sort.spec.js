import { quicksort } from './sort';

describe('quicksort', () => {
  it('should sort', () => {
    expect(quicksort([])).toEqual([]);
    expect(quicksort([-4, 1, Infinity, 3, 3, 0])).toEqual([-4, 0, 1, 3, 3, Infinity]);
  });
});
