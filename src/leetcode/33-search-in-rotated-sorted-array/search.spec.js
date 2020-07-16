import search from './search';

it('search', () => {
  const cases = [
    { in: [[4, 5, 6, 7, 0, 1, 2], 0], out: 4 },
    { in: [[4, 5, 6, 7, 0, 1, 2], 3], out: -1 },
    { in: [[4, 5, 6, 0, 1, 2], 3], out: -1 },
    { in: [[4, 5], 5], out: 1 },
    { in: [[4, 5, 6, 7, 8, 1, 2, 3], 8], out: 4 }
  ];

  cases.forEach(({ in: [nums, target], out }) => {
    expect(search(nums, target)).toBe(out);
  });
});
