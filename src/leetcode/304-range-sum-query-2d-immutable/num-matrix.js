class NumMatrix {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    this.matrix = matrix;
    this.cache = {};
  }

  keyOf(row1, col1, row2, col2) {
    return `${row1}:${col1}:${row2}:${col2}`;
  }

  sumRegion(row1, col1, row2, col2) {
    const key = this.keyOf(row1, col1, row2, col2);
    if (key in this.cache) {
      return this.cache[key];
    }

    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }

    this.cache[key] = sum;
    return sum;
  }
}
export default NumMatrix;
