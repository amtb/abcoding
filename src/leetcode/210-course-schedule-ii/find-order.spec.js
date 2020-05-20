import findOrder from './find-order';

describe('findOrder', () => {
  it('works on empty prereq', () => {
    expect(findOrder(1, [])).toEqual([0]);
  });

  it('detect cycles', () => {
    expect(
      findOrder(2, [
        [0, 1],
        [1, 0]
      ])
    ).toEqual([]);
  });

  it('sorts ok', () => {
    expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
    expect(
      findOrder(3, [
        [2, 0],
        [2, 1]
      ])
    ).toEqual([1, 0, 2]);
    /**
      0 <----------------+ 2
      ^                    ^
      |                    |
      |                    |
      |                    |
      +                    +
      1<------------------+3
     */
    expect(
      findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2]
      ])
    ).toEqual([0, 2, 1, 3]);
  });
});
