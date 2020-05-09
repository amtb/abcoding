/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
class Node {
  constructor (val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (graph) {
  const cache = {};

  function cloneNode (node) {
    if (!node) {
      return node;
    }

    if (cache[node.val]) {
      return cache[node.val];
    }

    const clone = new Node(node.val);
    cache[node.val] = clone;

    clone.neighbors = node.neighbors.map(cloneNode);

    return clone;
  }

  return cloneNode(graph);
};

export default cloneGraph;
