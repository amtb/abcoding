import singleNumber, { singleNum } from './single-number';

test('singleNumber', () => {
  const fns = [singleNum, singleNumber];
  const cases = [
    {
      in: [2, 2, 1],
      out: 1
    },
    {
      in: [4, 1, 2, 1, 2],
      out: 4
    }
  ];

  cases.forEach((tCase) =>
    fns.forEach((fn) => expect(fn(tCase.in)).toBe(tCase.out))
  );
});
