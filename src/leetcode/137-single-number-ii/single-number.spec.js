import singleNumber from './single-number';

test('singleNumber', () => {
  const cases = [
    {
      input: [2, 2, 3, 2],
      out: 3
    },
    {
      input: [0, 1, 0, 1, 0, 1, 99],
      out: 99
    },
    {
      input: [30000, 500, 100, 30000, 100, 30000, 100],
      out: 500
    }
  ];

  cases.forEach(({ input, out }) => expect(singleNumber(input)).toBe(out));
});
