/**
 *
 * @param {Node} root
 */
var connect = function (root) {
  /**
   * @param {Node} node
   * @param {any} data
   * @param {number} depth
   */
  const levels = (node, data, depth = 0) => {
    if (!node) {
      return;
    }

    data[depth] = data[depth] || [];

    data[depth].push(node);

    levels(node.left, data, 1 + depth);
    levels(node.right, data, 1 + depth);
  };

  /**
   * @param {Node[]} nodes
   */
  const setNext = (nodes) => {
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
  };

  const data = {};
  levels(root, data);

  Object.values(data).forEach(setNext);

  return root;
};

export default connect;
