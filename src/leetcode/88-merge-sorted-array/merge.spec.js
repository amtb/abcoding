import merge from './merge';

it('merge', () => {
  const cases = [
    {
      args: {
        left: [[1, 2, 3, 0, 0, 0], 3],
        right: [[2, 5, 6], 3]
      },
      out: [1, 2, 2, 3, 5, 6]
    },
    {
      args: {
        left: [[1], 1],
        right: [[], 0]
      },
      out: [1]
    }
  ];

  cases.forEach(({ args, out }) => {
    const { left, right } = args;
    const [nums1, m] = left;
    const [nums2, n] = right;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(out);
  });
});
