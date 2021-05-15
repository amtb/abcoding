import wordBreak, { anotherWordBreak, bestWordBreak } from './word-break';

it('wordBreak', () => {
  const cases = [
    { inputs: ['leetcode', ['leet', 'code']], output: true },
    { inputs: ['applepenapple', ['apple', 'pen']], output: true },
    { inputs: ['cars', ['car', 'ca', 'rs']], output: true },
    { inputs: ['catsandog', ['cats', 'dog', 'sand', 'cat']], output: false },
    { inputs: ['acccbccb', ['cc', 'bc', 'ac', 'ca']], output: false },
    {
      inputs: [
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        [
          'a',
          'aa',
          'aaa',
          'aaaa',
          'aaaaa',
          'aaaaaa',
          'aaaaaaa',
          'aaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaaa'
        ]
      ],
      output: false
    }
  ];

  const fns = [wordBreak, anotherWordBreak, bestWordBreak];
  cases.forEach(({ inputs, output }) =>
    fns.forEach((fn) => expect(fn(...inputs)).toBe(output))
  );
});
