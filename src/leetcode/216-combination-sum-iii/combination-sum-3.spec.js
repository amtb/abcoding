import combinationSum3 from './combination-sum-3';

it('combinationSum3', () => {
  const cases = [
    { inputs: [3, 7], output: [[1, 2, 4]] },
    {
      inputs: [3, 9],
      output: [
        [1, 2, 6],
        [1, 3, 5],
        [2, 3, 4]
      ]
    },
    { inputs: [4, 1], output: [] },
    { inputs: [3, 2], output: [] },
    { inputs: [9, 45], output: [[1, 2, 3, 4, 5, 6, 7, 8, 9]] },
    { inputs: [2, 18], output: [] }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(combinationSum3(...inputs)).toEqual(output)
  );
});
