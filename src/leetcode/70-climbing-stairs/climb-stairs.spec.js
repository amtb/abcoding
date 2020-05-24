import climbStairs from './climb-stairs';

it('climbStairs', () => {
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
  expect(climbStairs(10)).toBe(89);
});
