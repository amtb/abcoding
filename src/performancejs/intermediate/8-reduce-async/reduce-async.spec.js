import { reduceAsync } from './reduce-async';

describe('reduceAsync', () => {
  const a = () => Promise.resolve('a');
  const b = () => Promise.resolve('b');
  const c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

  it('should return the correct value', async () => {
    expect(
      await reduceAsync(
        [a, b, c],
        (acc, value) => [...acc, value],
        []
      )
    ).toEqual(['a', 'b', 'c']);

    expect(
      await reduceAsync(
        [a, c, b],
        (acc, value) => [...acc, value],
        ['d']
      )
    ).toEqual(['d', 'a', 'c', 'b']);
  });

  it('should return the correct value when there is no initial value', async () => {
    expect(
      await reduceAsync(
        [a, c, b],
        (acc, value) => acc + value
      )
    ).toBe('acb');
  });
});
