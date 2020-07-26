import countPrimes from './count-primes';

it('countPrimes', () => {
  const cases = [
    { n: 10, r: 4 },
    { n: 11, r: 4 },
    { n: 111, r: 29 },
    { n: 213, r: 47 }
  ];

  cases.forEach(({ n, r }) => expect(countPrimes(n)).toBe(r));
});
