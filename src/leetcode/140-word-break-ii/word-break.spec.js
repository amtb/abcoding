import wordBreak from './word-break';

it('wordBreak', () => {
  const cases = [
    {
      inputs: ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
      output: ['cat sand dog', 'cats and dog']
    },
    {
      inputs: [
        'pineapplepenapple',
        ['apple', 'pen', 'applepen', 'pine', 'pineapple']
      ],
      output: [
        'pine apple pen apple',
        'pine applepen apple',
        'pineapple pen apple'
      ]
    },
    { inputs: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], output: [] }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(wordBreak(...inputs)).toEqual(output)
  );
});
