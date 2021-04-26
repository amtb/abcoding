import isSubsequence from './is-subsequence';

it('isSubsequence', () => {
  const cases = [
    { inputs: ['abc', 'ahbgdc'], output: true },
    { inputs: ['axc', 'ahbgdc'], output: false },
    { inputs: ['aaaaaa', 'bbaaaa'], output: false },
    { inputs: ['bb', 'ahbgdc'], output: false }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(isSubsequence(...inputs)).toBe(output)
  );
});
