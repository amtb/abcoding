import { isSorted } from './is-sorted';

describe('isSorted', () => {
  it('should be true', () => {
    expect(isSorted([])).toBe(true);
    expect(isSorted([1])).toBe(true);
    expect(isSorted([1, 1])).toBe(true);
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true);
  });

  it('should be false', () => {
    expect(isSorted([1, 2, 3, -1])).toBe(false);
    expect(isSorted([3, 9, -3, 10])).toBe(false);
  });
});
