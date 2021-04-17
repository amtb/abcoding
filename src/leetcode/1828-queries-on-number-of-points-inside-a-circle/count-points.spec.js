import countPoints from './count-points';

it('countPoints', () => {
  const cases = [
    {
      inputs: [
        [
          [1, 3],
          [3, 3],
          [5, 3],
          [2, 2]
        ],
        [
          [2, 3, 1],
          [4, 3, 1],
          [1, 1, 2]
        ]
      ],
      output: [3, 2, 2]
    },
    {
      inputs: [
        [
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5]
        ],
        [
          [1, 2, 2],
          [2, 2, 2],
          [4, 3, 2],
          [4, 3, 3]
        ]
      ],
      output: [2, 3, 2, 4]
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(countPoints(...inputs)).toEqual(output)
  );
});
