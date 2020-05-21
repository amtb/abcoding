import Trie from './trie';
import { SimpleTrie } from './simple-trie';

it('Trie', () => {
  const trie = new Trie();

  trie.insert('apple');
  // search
  expect(trie.search('apple')).toBe(true);
  expect(trie.search('app')).toBe(false);

  // startsWtih
  expect(trie.startsWith('app')).toBe(true);
  trie.insert('app');
  trie.search('app'); // returns true
});

it('QuickTrie', () => {
  const trie = new SimpleTrie();

  trie.insert('apple');
  // search
  expect(trie.search('apple')).toBe(true);
  expect(trie.search('app')).toBe(false);

  // startsWtih
  expect(trie.startsWith('app')).toBe(true);
  trie.insert('app');
  trie.search('app'); // returns true
});
