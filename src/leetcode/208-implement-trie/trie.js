/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.children = {};
  this.end = false;
};

/**
 * detach the head
 * @param {string} word
 */
Trie.prototype.split = function (word) {
  return {
    head: word.charAt(0),
    rest: word.slice(1)
  };
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (word) {
    const { head, rest } = this.split(word);
    const node = this.children[head] ? this.children[head] : new Trie();
    if (rest.length === 0) {
      node.end = true;
    }
    node.insert(rest);

    this.children[head] = node;
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (word) {
    const { head, rest } = this.split(word);
    const child = this.children[head];
    if (child) {
      if (rest) {
        return child.search(rest);
      } else {
        return child.end === true;
      }
    }
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (prefix) {
    const { head, rest } = this.split(prefix);
    const child = this.children[head];
    if (child) {
      if (rest) {
        return child.startsWith(rest);
      } else {
        return true;
      }
    }
    return false;
  }
};

export default Trie;
