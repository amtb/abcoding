/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix[0].length;
  const n = matrix.length;

  const rows = new Set();
  const columns = new Set();

  for (let i = 0; i < n; i++) {
    const indexes = [];
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        indexes.push(j);
      }
    }
    if (indexes.length) {
      rows.add(i);
      indexes.forEach((index) => columns.add(index));
    }
  }

  const zerow = Array(m).fill(0);
  for (const row of rows.values()) {
    matrix[row] = zerow;
  }

  for (const column of columns.values()) {
    for (let i = 0; i < n; i++) {
      matrix[i][column] = 0;
    }
  }
};

export default setZeroes;
