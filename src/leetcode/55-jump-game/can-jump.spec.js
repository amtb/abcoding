import canJump from './can-jump';

it('canJump', () => {
  expect(canJump([1])).toBe(true);
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  expect(canJump([1, 2])).toBe(true);
  expect(canJump([2, 0, 0])).toBe(true);

  expect(canJump([0, 1])).toBe(false);
  expect(canJump([0, 2, 3])).toBe(false);
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  expect(canJump([0, 0, 4])).toBe(false);
});
