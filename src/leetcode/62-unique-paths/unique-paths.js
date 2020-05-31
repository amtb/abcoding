/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }

  const matrix = Array.from({ length: m }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === 0 || j === 0 ? 1 : 'x'))
  );

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};

export default uniquePaths;
