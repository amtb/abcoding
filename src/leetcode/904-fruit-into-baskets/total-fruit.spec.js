import totalFruit from './total-fruit';

it('totalFruit', () => {
  const cases = [
    {
      inputs: [[1, 2, 1]],
      output: 3
    },
    {
      inputs: [[0, 1, 2, 2]],
      output: 3
    },
    {
      inputs: [[1, 2, 3, 2, 2]],
      output: 4
    },
    {
      inputs: [[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]],
      output: 5
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(totalFruit(...inputs)).toBe(output)
  );
});
