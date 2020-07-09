export class SimpleTrie {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {};
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr[char]) {
        curr[char] = {};
      }
      curr = curr[char];
    }
    curr.end = true;
  }

  /**
   * Traverses the trie to find the last node stopping at the given word
   * @param {string} word
   */
  find(word) {
    let curr = this.root;
    for (const char of word) {
      if (curr[char]) {
        curr = curr[char];
      } else {
        return null;
      }
    }
    return curr;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.find(word);
    return !!node && node.end === true;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.find(prefix) !== null;
  }
}
