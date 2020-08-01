import reverse from './reverse';

it('reverse', () => {
  const cases = [
    { number: 123, result: 321 },
    { number: -123, result: -321 },
    { number: 120, result: 21 },
    { number: 9, result: 9 },
    { number: 1534236469, result: 0 }
  ];

  cases.forEach(({ number, result }) => expect(reverse(number)).toBe(result));
});
