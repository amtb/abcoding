import isAnagram from './is-anagram';

it('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
});
