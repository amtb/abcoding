import rob from './rob';

it('rob', () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
  expect(rob([2, 1, 1, 2])).toBe(4);
});
