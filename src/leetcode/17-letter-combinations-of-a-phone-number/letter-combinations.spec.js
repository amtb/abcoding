import letterCombinations from './letter-combinations';

it('letterCombinations', () => {
  const cases = [
    {
      input: '23',
      output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    }
  ];

  cases.forEach(({ input, output }) =>
    expect(letterCombinations(input)).toEqual(expect.arrayContaining(output))
  );
});
