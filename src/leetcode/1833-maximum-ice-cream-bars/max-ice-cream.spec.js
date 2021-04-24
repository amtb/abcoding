import maxIceCream from './max-ice-cream';

it('maxIceCream', () => {
  const cases = [
    {
      inputs: [[1, 3, 2, 4, 1], 7],
      output: 4
    },
    {
      inputs: [[10, 6, 8, 7, 7, 8], 5],
      output: 0
    },
    { inputs: [[1, 6, 3, 1, 2, 5], 20], output: 6 }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(maxIceCream(...inputs)).toBe(output)
  );
});
