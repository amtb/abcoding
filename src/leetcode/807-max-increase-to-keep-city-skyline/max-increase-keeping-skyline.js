/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length;

  const rows = [];
  const cols = [];

  // compute the skyline for each rows/cols of building ()
  for (let i = 0; i < n; i++) {
    let maxRow = -Infinity;
    let maxCol = -Infinity;
    for (let j = 0; j < n; j++) {
      maxRow = Math.max(grid[i][j], maxRow);
      maxCol = Math.max(grid[j][i], maxCol);
    }
    rows[i] = maxRow;
    cols[i] = maxCol;
  }

  let height = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // check the lowest of the skyline buildings aligned with the building (row/col wise)
      const skyline = Math.min(rows[i], cols[j]);
      // top-up needed to keep the shape in place
      height += skyline - grid[i][j];
    }
  }

  return height;
};

export default maxIncreaseKeepingSkyline;
