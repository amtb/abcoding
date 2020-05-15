import fn from './product-expect-self';

it('productExceptSelf', () => {
  expect(fn([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});
