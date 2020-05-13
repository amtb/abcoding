import lengthOfLongestSubstring from './length-of-longest-substring';

it('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring(' ')).toBe(1);
  expect(lengthOfLongestSubstring('dvdf')).toBe(3);
});
