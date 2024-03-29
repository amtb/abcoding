import subsets from './subsets';

it('subsets', () => {
  expect(subsets([1, 2, 3])).toEqual(
    expect.arrayContaining([
      [3],
      [1],
      [2],
      [1, 2, 3],
      [1, 3],
      [2, 3],
      [1, 2],
      []
    ])
  );
});
