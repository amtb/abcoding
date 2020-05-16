import { reduce } from './reduce';

describe('reduce', () => {
  it('should return the correct value', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);

    expect(
      reduce(
        ['foo', 'bar'],
        (acc, v) => {
          acc[v] = v;
          return acc;
        },
        {}
      )
    ).toEqual({
      foo: 'foo',
      bar: 'bar'
    });
  });

  it('should return the correct value when there is no initial value', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b)).toBe(10);
  });
});
