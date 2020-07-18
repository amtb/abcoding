import plusOne from './plus-one';

it('plusOne', () => {
  const cases = [
    { in: [1, 2, 3], out: [1, 2, 4] },
    { in: [4, 3, 2, 1], out: [4, 3, 2, 2] },
    { in: [9], out: [1, 0] }
  ];

  cases.forEach(({ in: nums, out: expected }) =>
    expect(plusOne(nums)).toEqual(expected)
  );
});
