/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const visiting = Array.from({ length: rows }, () =>
    Array.from({ length: cols })
  );

  /** @returns next cells to explore */
  const getNeighbors = (i, j, nextChar) => {
    const neighbors = [];
    if (i > 0) neighbors.push([i - 1, j]);
    if (j > 0) neighbors.push([i, j - 1]);
    if (i < rows - 1) neighbors.push([i + 1, j]);
    if (j < cols - 1) neighbors.push([i, j + 1]);

    return neighbors.filter(
      ([r, c]) => !visiting[r][c] && board[r][c] === nextChar
    );
  };

  const search = (i, j, index = 0) => {
    const matches = board[i][j] === word[index];

    // reached the end
    if (index === word.length - 1) return matches;

    if (matches) {
      // dry
      visiting[i][j] = true;

      // the wheels on the bus
      const neighbors = getNeighbors(i, j, word[index + 1]);
      const found = neighbors.some(([r, c]) => search(r, c, index + 1));

      // recycle
      visiting[i][j] = false;

      return found;
    }

    return false;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (search(i, j)) return true;
    }
  }

  return false;
};

export default exist;
