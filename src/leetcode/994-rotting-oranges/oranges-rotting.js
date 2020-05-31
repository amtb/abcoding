/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const ROWS = grid.length;
  const COLS = ROWS ? grid[0].length : 0;

  if (ROWS === 0 || COLS === 0) {
    return 0;
  }

  const FRESH = 1;
  const ROTTEN = 2;

  /**
   * rot fresh oranges around (i, j)
   * @param {number} i
   * @param {number} j
   */
  const rotAround = (i, j) => {
    const rotten = [];
    // up
    if (i > 0 && grid[i - 1][j] === FRESH) {
      grid[i - 1][j] = ROTTEN;
      rotten.push([i - 1, j]);
    }
    // down
    if (i < ROWS - 1 && grid[i + 1][j] === FRESH) {
      grid[i + 1][j] = ROTTEN;
      rotten.push([i + 1, j]);
    }
    // left
    if (j > 0 && grid[i][j - 1] === FRESH) {
      grid[i][j - 1] = ROTTEN;
      rotten.push([i, j - 1]);
    }
    // right
    if (j < COLS - 1 && grid[i][j + 1] === FRESH) {
      grid[i][j + 1] = ROTTEN;
      rotten.push([i, j + 1]);
    }

    return rotten;
  };

  // the number of fresh oranges
  let freshes = 0;
  // the rotten oranges
  let rotten = [];
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === ROTTEN) {
        rotten.push([i, j]);
      }
      if (grid[i][j] === FRESH) {
        freshes += 1;
      }
    }
  }

  let time = 0;
  let nextCycle = [];
  while (rotten.length) {
    const [i, j] = rotten.pop();
    nextCycle = [...nextCycle, ...rotAround(i, j)];
    if (rotten.length === 0) {
      freshes -= nextCycle.length;
      time += nextCycle.length ? 1 : 0;
      rotten = [...nextCycle];
      nextCycle.length = 0;
    }
  }

  return freshes === 0 ? time : -1;
};

export default orangesRotting;
