import removeDuplicates from './remove-duplicates';

it('removeDuplicates', () => {
  const cases = [
    { in: [1, 2], out: { length: 2, v: [1, 2] } },
    { in: [1, 1, 2], out: { length: 2, v: [1, 2] } },
    {
      in: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      out: { length: 5, v: [0, 1, 2, 3, 4] }
    },
    { in: [], out: { length: 0, v: [] } }
  ];

  cases.forEach(({ in: input, out }) => {
    const { length, v } = out;
    expect(removeDuplicates(input)).toBe(length);
    expect(input).toEqual(v);
  });
});
