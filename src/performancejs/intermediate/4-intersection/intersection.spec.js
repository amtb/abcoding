import { intersection } from './intersection';

it('should be return the correct intersection', () => {
  expect(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual(expect.arrayContaining([4, 1]));
  expect(intersection([1, 5, 4, 2], [7, 12])).toEqual(expect.arrayContaining([]));
});
