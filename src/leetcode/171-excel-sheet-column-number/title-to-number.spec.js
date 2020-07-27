import titleToNumber from './title-to-number';

it('titleToNumber', () => {
  const cases = [
    { input: 'A', output: 1 },
    { input: 'AA', output: 27 },
    { input: 'ZY', output: 701 }
  ];

  cases.forEach(({ input, output }) =>
    expect(titleToNumber(input)).toBe(output)
  );
});
