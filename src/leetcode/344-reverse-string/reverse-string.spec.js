import reverseString from './reverse-string';

it('reverseString', () => {
  const cases = [
    { array: ['h', 'e', 'l', 'l', 'o'], expected: ['o', 'l', 'l', 'e', 'h'] },
    { array: ['h', 'e', 'l', 'o'], expected: ['o', 'l', 'e', 'h'] }
  ];

  cases.forEach(({ array, expected }) => {
    reverseString(array);
    expect(array).toEqual(expected);
  });
});
