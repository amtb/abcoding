import repeatedStringMatch from './repeated-string-match';

it('repeatedStringMatch', () => {
  const cases = [
    { inputs: ['abcd', 'cdabcdab'], output: 3 },
    { inputs: ['a', 'aa'], output: 2 },
    { inputs: ['a', 'a'], output: 1 },
    { inputs: ['abc', 'wxyz'], output: -1 }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(repeatedStringMatch(...inputs)).toBe(output)
  );
});
