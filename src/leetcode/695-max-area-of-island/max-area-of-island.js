/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  /**
   * my friends
   * @param {number} i
   * @param {number} j
   */
  const getNeighbors = (i, j) => {
    const friends = [];
    if (i > 0) {
      friends.push([i - 1, j]);
    }
    if (i < grid.length - 1) {
      friends.push([i + 1, j]);
    }
    if (j > 0) {
      friends.push([i, j - 1]);
    }
    if (j < grid[i].length - 1) {
      friends.push([i, j + 1]);
    }

    return friends;
  };

  /**
   * get the area of all connecting land atthe coordinates
   * @param {number} i
   * @param {number} j
   */
  const getArea = (i, j) => {
    let area = 0;
    // columbus here
    if (grid[i][j] === 1) {
      area = 1;
      // colonize it
      grid[i][j] = 'x';
      // colonize all the neigbors
      const neighbors = getNeighbors(i, j);
      if (neighbors.length) {
        area += neighbors.reduce((total, [x, y]) => total + getArea(x, y), 0);
      }
    }
    return area;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, getArea(i, j));
      }
    }
  }

  return maxArea;
};

export default maxAreaOfIsland;
