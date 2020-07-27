import majorityElement from './majority-element';

it('majorityElement', () => {
  const cases = [
    { array: [3, 2, 3], majority: 3 },
    { array: [2, 2, 1, 1, 1, 2, 2], majority: 2 },
    { array: [1], majority: 1 },
    { array: [3, 3, 4], majority: 3 }
  ];

  cases.forEach(({ array, majority }) =>
    expect(majorityElement(array)).toBe(majority)
  );
});
