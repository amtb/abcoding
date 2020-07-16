/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const valid = (index, row = true) => {
    const acc = {};
    for (let i = 0; i < 9; i++) {
      const value = row ? board[index][i] : board[i][index];
      if (value !== '.') {
        if (!acc[value]) {
          acc[value] = value;
        } else {
          return false;
        }
      }
    }

    return true;
  };

  const validBox = (row, col) => {
    const acc = {};
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        const value = board[i][j];
        if (value !== '.') {
          if (!acc[value]) {
            acc[value] = value;
          } else {
            return false;
          }
        }
      }
    }

    return true;
  };

  for (let i = 0; i < 9; i++) {
    if (!valid(i) || !valid(i, false)) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!validBox(i, j)) {
        return false;
      }
    }
  }

  return true;
};

export default isValidSudoku;
