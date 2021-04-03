/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;
  const allPaths = [];

  // finds the path to the target by building on top of the current path
  const findPath = (path) => {
    const index = path.length - 1;
    // have we reached the end ?
    if (path[index] === target) {
      allPaths.push(path);
    } else {
      // next vertices to check
      const next = graph[path[index]];
      for (const vertex of next) {
        path[index + 1] = vertex;
        // down the rabbit hole
        findPath([...path]);
      }
    }
  };

  findPath([0]);
  return allPaths;
};

export default allPathsSourceTarget;
