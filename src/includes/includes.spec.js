import { includes } from './includes';

describe('includes', () => {
  it('should be true', () => {
    expect(includes([1, 3, 8, 8, 15], 15)).toBe(true);
    expect(includes([1, 3, 8, 10], 8)).toBe(true);
    expect(includes([1, 3, 8, 10], 1)).toBe(true);
  });

  it('should be false', () => {
    expect(includes([], 10)).toBe(false);
    expect(includes([1, 3, 8, 10, 15], 9)).toBe(false);
    expect(includes([1, 3, 8, 10, 15], 25)).toBe(false);
  });
});
