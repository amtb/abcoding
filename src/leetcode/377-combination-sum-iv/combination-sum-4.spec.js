import combinationSum4 from './combination-sum-4';

it('combinationSum4', () => {
  const cases = [
    {
      inputs: [[1, 2, 3], 4],
      output: 7
    },
    { inputs: [[9], 3], output: 0 },
    { inputs: [[1, 2], 10], output: 89 }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(combinationSum4(...inputs)).toBe(output)
  );
});
