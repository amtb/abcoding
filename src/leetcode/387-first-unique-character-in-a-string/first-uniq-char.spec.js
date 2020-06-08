import firstUniqChar from './first-uniq-char';

it('firstUniqChar', () => {
  expect(firstUniqChar('leetcode')).toBe(0);
  expect(firstUniqChar('loveleetcode')).toBe(2);
  expect(firstUniqChar('aadadaad')).toBe(-1);
});
