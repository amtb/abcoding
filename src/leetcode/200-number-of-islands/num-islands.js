/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;

  /**
   * @return {{x, y}[]}
   */
  const getNeighbors = (i, j) => {
    const neighbors = [];
    // left
    if (i > 0) {
      neighbors.push([i - 1, j]);
    }
    // right
    if (i < rows - 1) {
      neighbors.push([i + 1, j]);
    }
    // up
    if (j > 0) {
      neighbors.push([i, j - 1]);
    }
    // down
    if (j < grid[i].length - 1) {
      neighbors.push([i, j + 1]);
    }

    return neighbors;
  };

  /**
   * pour water on all neighboring land
   */
  const submerge = (i, j) => {
    if (grid[i][j] === '1') {
      grid[i][j] = '0';
      const neighbors = getNeighbors(i, j);
      neighbors.forEach(([x, y]) => submerge(x, y));
    }
  };

  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const value = grid[i][j];
      if (value === '1') {
        islands += 1;
        submerge(i, j);
      }
    }
  }

  return islands;
};

export default numIslands;
