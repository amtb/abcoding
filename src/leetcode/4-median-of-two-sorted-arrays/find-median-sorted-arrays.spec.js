import findMedianSortedArrays from './find-median-sorted-arrays';

it('findMedianSortedArrays', () => {
  const cases = [
    {
      inputs: [[1, 3], [2]],
      output: 2.0
    },
    {
      inputs: [
        [1, 2],
        [3, 4]
      ],
      output: 2.5
    },
    {
      inputs: [
        [0, 0],
        [0, 0]
      ],
      output: 0.0
    },
    {
      inputs: [[], [1]],
      output: 1.0
    },
    {
      inputs: [[2], []],
      output: 2.0
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(findMedianSortedArrays(...inputs)).toBe(output)
  );
});
