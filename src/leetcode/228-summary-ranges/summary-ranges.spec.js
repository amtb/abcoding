import summaryRanges from './summary-ranges';

it('summaryRanges', () => {
  const cases = [
    {
      inputs: [[0, 1, 2, 4, 5, 7]],
      output: ['0->2', '4->5', '7']
    },
    {
      inputs: [[0, 2, 3, 4, 6, 8, 9]],
      output: ['0', '2->4', '6', '8->9']
    },
    { inputs: [[]], output: [] },
    {
      inputs: [[-1]],
      output: ['-1']
    },
    { inputs: [[0]], output: ['0'] }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(summaryRanges(...inputs)).toEqual(output)
  );
});
