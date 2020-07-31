/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const DEAD = 0;
  const LIVE = 1;

  const rows = board.length;
  if (!rows) return;

  const cols = board[0].length;
  if (!cols) return;

  /** @returns {number[][]} */
  const getNeighbors = (i, j) => {
    const neighbors = [];

    if (i > 0) {
      neighbors.push([i - 1, j]);

      if (j > 0) neighbors.push([i - 1, j - 1]);
      if (j < cols - 1) neighbors.push([i - 1, j + 1]);
    }

    if (i < rows - 1) {
      neighbors.push([i + 1, j]);

      if (j > 0) neighbors.push([i + 1, j - 1]);
      if (j < cols - 1) neighbors.push([i + 1, j + 1]);
    }

    if (j > 0) neighbors.push([i, j - 1]);
    if (j < cols - 1) neighbors.push([i, j + 1]);

    return neighbors;
  };

  const changes = (i, j) => {
    const numberOfNeighborsAlive = getNeighbors(i, j).filter(
      ([r, c]) => board[r][c] === LIVE
    ).length;
    if (board[i][j] === LIVE) {
      // Any live cell with fewer than two live neighbors dies, as if caused by under-population.
      // Any live cell with two or three live neighbors lives on to the next generation.
      return numberOfNeighborsAlive < 2 || numberOfNeighborsAlive > 3;
    } else {
      // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
      return numberOfNeighborsAlive === 3;
    }
  };

  const changedCells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (changes(i, j)) {
        changedCells.push({ i, j });
      }
    }
  }

  changedCells.forEach(
    ({ i, j }) => (board[i][j] = board[i][j] === DEAD ? LIVE : DEAD)
  );
};

export default gameOfLife;
