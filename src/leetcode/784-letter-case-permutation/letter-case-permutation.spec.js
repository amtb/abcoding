import letterCasePermutation from './letter-case-permutation';

it('letterCasePermutation', () => {
  const cases = [
    { string: 'a1b2', permutations: ['a1b2', 'a1B2', 'A1b2', 'A1B2'] },
    { string: '3z4', permutations: ['3z4', '3Z4'] },
    { string: '12345', permutations: ['12345'] }
  ];

  cases.forEach(({ string, permutations }) => {
    const results = letterCasePermutation(string);
    expect(results).toEqual(expect.arrayContaining(permutations));
    expect(results.length).toBe(permutations.length);
  });
});
