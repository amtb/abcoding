import coinChange from './coin-change';

it('coinChange', () => {
  expect(coinChange([1, 2, 5], 100)).toBe(20);
  expect(coinChange([1, 2, 5], 11)).toBe(3);
  expect(coinChange([2, 3], 3)).toBe(1);
  expect(coinChange([2], 3)).toBe(-1);
});
