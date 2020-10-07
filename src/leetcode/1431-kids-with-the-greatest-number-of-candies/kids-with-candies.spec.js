import kidsWithCandies from './kids-with-candies';

it('kidsWithCandies', () => {
  const cases = [
    {
      candies: [2, 3, 5, 1, 3],
      extra: 3,
      out: [true, true, true, false, true]
    },
    {
      candies: [4, 2, 1, 1, 2],
      extra: 1,
      out: [true, false, false, false, false]
    },
    { candies: [12, 1, 12], extra: 10, out: [true, false, true] }
  ];

  cases.forEach(({ candies, extra, out }) =>
    expect(kidsWithCandies(candies, extra)).toEqual(out)
  );
});
