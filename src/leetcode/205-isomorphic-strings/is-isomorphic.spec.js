import isIsomorphic from './is-isomorphic';

it('isIsomorphic', () => {
  const cases = [
    { inputs: ['egg', 'add'], output: true },
    { inputs: ['foo', 'bar'], output: false },
    { inputs: ['paper', 'title'], output: true },
    { inputs: ['badc', 'baba'], output: false }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(isIsomorphic(...inputs)).toBe(output)
  );
});
