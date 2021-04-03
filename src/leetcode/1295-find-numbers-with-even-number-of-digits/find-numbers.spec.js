import findNumbers from './find-numbers';

it('findNumbers', () => {
  const cases = [
    { array: [12, 345, 2, 6, 7896], out: 2 },
    { array: [555, 901, 482, 1771], out: 1 }
  ];

  cases.forEach(({ array, out }) => expect(findNumbers(array)).toBe(out));
});
