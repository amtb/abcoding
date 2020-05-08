import groupAnagrams from './grouped-anagrams';

it('groupedAnagrams', () => {
  expect(groupAnagrams(['', '', ''])).toEqual([['', '', '']]);
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
});
