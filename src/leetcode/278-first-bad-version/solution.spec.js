import solution, { solve } from './solution';

it('solution', () => {
  expect(solution((x) => x >= 7)(10)).toBe(7);
  expect(solution((x) => x > 2)(5)).toBe(3);
  expect(solution((x) => x >= 5)(10)).toBe(5);
});

it('solve', () => {
  expect(solve((x) => x >= 7)(10)).toBe(7);
  expect(solve((x) => x > 2)(5)).toBe(3);
  expect(solve((x) => x >= 5)(10)).toBe(5);
});
