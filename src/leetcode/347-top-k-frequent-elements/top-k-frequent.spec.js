import topKFrequent from './top-k-frequent';

it('topKFrequent', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual(
    expect.arrayContaining([1, 2])
  );
  expect(topKFrequent([1], 1)).toEqual([1]);
});
