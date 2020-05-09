import { filter } from './filter';

it('should filter', () => {
  expect(
    filter([1, 2, 3, 4], n => n < 3)
  ).toEqual(
    [1, 2]
  );

  expect(
    filter(['a', 'b', 'cd', 'ef'], s => s.length === 1)
  ).toEqual(
    ['a', 'b']
  );
});
