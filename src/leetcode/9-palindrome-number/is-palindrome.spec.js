import isPalindrome from './is-palindrome';

it('isPalindrome', () => {
  const cases = [
    { number: 0, result: true },
    { number: 121, result: true },
    { number: -121, result: false },
    { number: 10, result: false }
  ];

  cases.forEach(({ number, result }) =>
    expect(isPalindrome(number)).toBe(result)
  );
});
