import findDuplicate, { findDuplicateNumber } from './find-duplicate';

it('findDuplicate', () => {
  const fns = [findDuplicate, findDuplicateNumber];
  const cases = [
    { in: [1, 3, 4, 2, 2], out: 2 },
    { in: [3, 1, 3, 4, 2], out: 3 }
  ];

  cases.forEach(({ in: nums, out: expected }) =>
    fns.forEach((fn) => expect(fn(nums)).toBe(expected))
  );
});
