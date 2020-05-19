import canFinish from './can-finish';

it('canFinish', () => {
  expect(canFinish(2, [[1, 0]])).toBe(true);
  expect(canFinish(3, [[0, 2], [1, 0], [1, 2]])).toBe(true);

  expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  expect(canFinish(3, [[1, 0], [0, 2], [2, 1]])).toBe(false);
  expect(canFinish(4, [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]])).toBe(false);
});
