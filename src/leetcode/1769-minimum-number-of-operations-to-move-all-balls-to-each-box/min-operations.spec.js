import minOperations from './min-operations';

it('minOperations', () => {
  const cases = [
    { inputs: ['110'], output: [1, 1, 3] },
    { inputs: ['001011'], output: [11, 8, 5, 4, 3, 4] }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(minOperations(...inputs)).toEqual(output)
  );
});
