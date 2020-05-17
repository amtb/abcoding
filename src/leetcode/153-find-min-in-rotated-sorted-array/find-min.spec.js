import findMin from './find-min';

it('findMin', () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  expect(findMin([1])).toBe(1);
  expect(findMin([1, 2])).toBe(1);
});
