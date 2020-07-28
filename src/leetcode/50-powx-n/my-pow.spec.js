import myPow from './my-pow';

it('myPow', () => {
  const cases = [
    { x: 2, n: 10, r: 1024 },
    { x: 2.1, n: 3, r: 9.261 },
    { x: 2, n: -2, r: 0.25 },
    { x: 0.5, n: 0, r: 1 }
  ];

  cases.forEach(({ x, n, r }) => expect(myPow(x, n)).toBeCloseTo(r));
});
