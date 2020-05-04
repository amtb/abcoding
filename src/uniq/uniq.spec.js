import { uniq } from './uniq';

describe('uniq', () => {
  it('should be unique', () => {
    expect(uniq([])).toEqual([]);
    expect(uniq([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8]);
  });
});
