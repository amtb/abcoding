import maxWidthOfVerticalArea from './max-width-of-vertical-area';

it('maxWidthOfVerticalArea', () => {
  const cases = [
    {
      inputs: [
        [
          [8, 7],
          [9, 9],
          [7, 4],
          [9, 7]
        ]
      ],
      output: 1
    },
    {
      inputs: [
        [
          [3, 1],
          [9, 0],
          [1, 0],
          [1, 4],
          [5, 3],
          [8, 8]
        ]
      ],
      output: 3
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(maxWidthOfVerticalArea(...inputs)).toBe(output)
  );
});
