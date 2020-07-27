import mySqrt from './my-sqrt';

it('mySqrt', () => {
  const cases = [
    { input: 4, output: 2 },
    { input: 8, output: 2 },
    { input: 12, output: 3 }
  ];

  cases.forEach(({ input, output }) => expect(mySqrt(input)).toBe(output));
});
