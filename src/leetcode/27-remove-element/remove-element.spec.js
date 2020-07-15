import removeElement from './remove-element';

it('removeElement', () => {
  const cases = [
    { in: [[3, 2, 2, 3], 3], out: { length: 2, v: [2, 2] } },
    {
      in: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
      out: { length: 5, v: [0, 1, 3, 0, 4] }
    }
  ];

  cases.forEach(({ in: [arr, value], out }) => {
    const { length, v } = out;
    expect(removeElement(arr, value)).toBe(length);
    expect(arr).toEqual(v);
  });
});
