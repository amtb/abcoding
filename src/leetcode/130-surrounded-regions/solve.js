/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const ROWS = board.length;
  const COLS = ROWS ? board[0].length : 0;
  if (ROWS === 0 || COLS === 0) {
    return;
  }

  /**
   * gets the coordinates of the neighbors of the point at (i, j)
   */
  const getNeighbors = (i, j) => {
    const neighbors = [];
    // up
    if (i > 1) {
      neighbors.push([i - 1, j]);
    }
    // down
    if (i < board.length - 2) {
      neighbors.push([i + 1, j]);
    }
    // left
    if (j > 1) {
      neighbors.push([i, j - 1]);
    }
    // right
    if (j < board[i].length - 2) {
      neighbors.push([i, j + 1]);
    }
    return neighbors;
  };

  /**
   * flag the point and all it's neighbors
   */
  const doNotTouch = (i, j) => {
    if (board[i][j] === 'O') {
      board[i][j] = 'M';
      const neighbors = getNeighbors(i, j);
      neighbors.forEach(([x, y]) => doNotTouch(x, y));
    }
  };

  const getBorders = () => {
    const borders = [];

    // first/last lines
    for (let j = 0; j < COLS; j++) {
      borders.push([0, j]);
      borders.push([ROWS - 1, j]);
    }

    // first/last columns
    for (let i = 1; i < ROWS - 1; i++) {
      borders.push([i, 0]);
      borders.push([i, COLS - 1]);
    }

    return borders;
  };

  // go through the borders an flag the 'O' and their neighbors
  const borders = getBorders();
  borders.forEach(([i, j]) => {
    if (board[i][j] === 'O') {
      doNotTouch(i, j);
    }
  });

  // set everything to 'X' except the flagged
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 'M') {
        board[i][j] = 'X';
      } else {
        board[i][j] = 'O';
      }
    }
  }
};

export default solve;
