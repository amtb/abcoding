import searchRange, { searchForRange } from './search-range';

it('searchRange', () => {

  const fns = [searchRange, searchForRange];

  const cases = [
    { numbers: [5, 7, 7, 8, 8, 10], target: 8, range: [3, 4] },
    { numbers: [5, 7, 7, 8, 8, 10], target: 6, range: [-1, -1] },
    { numbers: [5, 7, 7, 8, 8, 10], target: 10, range: [5, 5] },
    { numbers: [5, 7, 7, 8, 8, 10], target: 5, range: [0, 0] },
    { numbers: [5, 7, 7, 7, 8, 10, 11], target: 7, range: [1, 3] },
    { numbers: [5, 5], target: 5, range: [0, 1] }
  ];

  cases.forEach(({ numbers, target, range }) =>
    fns.forEach(fn => expect(fn(numbers, target)).toEqual(range))
  );
});
