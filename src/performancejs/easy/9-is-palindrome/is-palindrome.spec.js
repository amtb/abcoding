import { isPalindrome } from './is-palindrome';

describe('isPalindrome', () => {
  it('should be true', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('abcdcba')).toBe(true);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should be false', () => {
    expect(isPalindrome('abcd')).toBe(false);
    expect(isPalindrome('0P')).toBe(false);
    expect(isPalindrome('race a car')).toBe(false);
  });
});
