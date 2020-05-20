import wordBreak, { anotherWordBreak } from './word-break';

it('wordBreak (true)', () => {
  expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
  expect(anotherWordBreak('leetcode', ['leet', 'code'])).toBe(true);

  expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
  expect(anotherWordBreak('applepenapple', ['apple', 'pen'])).toBe(true);

  expect(wordBreak('cars', ['car', 'ca', 'rs'])).toBe(true);
});

it('wordBreak (false)', () => {
  expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'cat'])).toBe(false);
  expect(wordBreak('acccbccb', ['cc', 'bc', 'ac', 'ca'])).toBe(false);

  expect(
    anotherWordBreak(
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
    )
  ).toBe(false);
});
