import trap, { trap2, trap3 } from './trap';

it('trap', () => {
  const cases = [
    { inputs: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], output: 6 },
    { inputs: [[4, 2, 0, 3, 2, 5]], output: 9 }
  ];

  const fns = [trap, trap2, trap3];

  cases.forEach(({ inputs, output }) =>
    fns.forEach((fn) => expect(fn(...inputs)).toBe(output))
  );
});
