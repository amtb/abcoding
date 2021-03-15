/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const connections = {};

  // adds a connection and return the length
  const add = (k, v) => {
    if (!connections[k]) {
      connections[k] = [];
    }
    return connections[k].push(v);
  };

  let max = -1;
  let center = -1;

  // the center is the one with the most connections
  // (or with the same number of connections as the number of edges)
  for (const [left, right] of edges) {
    const leftConnections = add(left, right);
    if (leftConnections > max) {
      center = left;
      max = leftConnections;
    }

    const rightConnections = add(right, left);
    if (rightConnections > max) {
      center = right;
      max = rightConnections;
    }
  }

  return center;

  // for (const key in connections) {
  //   if (connections[key].length === edges.length) {
  //     return key;
  //   }
  // }
};

export default findCenter;
