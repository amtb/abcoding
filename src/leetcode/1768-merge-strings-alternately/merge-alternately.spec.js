import mergeAlternately from './merge-alternately';

it('mergeAlternately', () => {
  const cases = [
    { args: ['abc', 'pqr'], out: 'apbqcr' },
    { args: ['ab', 'pqrs'], out: 'apbqrs' },
    { args: ['abcd', 'pq'], out: 'apbqcd' }
  ];

  cases.forEach(({ args: [w1, w2], out }) => {
    expect(mergeAlternately(w1, w2)).toBe(out);
  });
});
