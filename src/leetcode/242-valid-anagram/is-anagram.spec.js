import isAnagram from './is-anagram';

fit('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  // expect(isAnagram('rat', 'car')).toBe(false);
});
