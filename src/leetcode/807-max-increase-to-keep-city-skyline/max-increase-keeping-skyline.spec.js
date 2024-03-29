import maxIncreaseKeepingSkyline from './max-increase-keeping-skyline';

it('maxIncreaseKeepingSkyline', () => {
  const cases = [
    {
      grid: [
        [3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0]
      ],
      increase: 35
    }
  ];

  cases.forEach(({ grid, increase }) =>
    expect(maxIncreaseKeepingSkyline(grid)).toBe(increase)
  );
});
