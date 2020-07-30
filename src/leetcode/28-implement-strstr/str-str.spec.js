import strStr from './str-str';

it('strStr', () => {
  const cases = [
    { haystack: 'hello', needle: '', output: 0 },
    { haystack: 'aaaaa', needle: 'bba', output: -1 },
    { haystack: 'hello', needle: 'helloooooooo', output: -1 },
    { haystack: 'hello', needle: 'll', output: 2 },
    { haystack: 'aabbbaa', needle: 'bba', output: 3 },
    { haystack: 'mississippi', needle: 'issippi', output: 4 }
  ];

  cases.forEach(({ haystack, needle, output }) =>
    expect(strStr(haystack, needle)).toBe(output)
  );
});
