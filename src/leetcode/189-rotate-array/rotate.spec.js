import rotate from './rotate';

it('rotate', () => {
  const cases = [
    { in: [[1, 2, 3, 4, 5, 6, 7], 3], out: [5, 6, 7, 1, 2, 3, 4] },
    { in: [[1, 2], 3], out: [2, 1] },
    { in: [[-1, -100, 3, 99], 2], out: [3, 99, -1, -100] },
    { in: [[-1, -100, 3, 99], 10], out: [3, 99, -1, -100] }
  ];

  cases.forEach(({ in: [nums, k], out }) => {
    rotate(nums, k);
    expect(nums).toEqual(out);
  });
});
