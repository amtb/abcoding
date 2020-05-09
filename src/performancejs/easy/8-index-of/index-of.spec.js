import { indexOf } from './index-of';

it('indexOf', () => {
  expect(indexOf([1, 2, 3], 1)).toBe(0);
  expect(indexOf([1, 2, 3], 4)).toBe(-1);
});
