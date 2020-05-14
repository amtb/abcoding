/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const regex = /^\s*([+-]?[0-9]+)/;
  const matches = regex.exec(str);

  let value = 0;
  if (matches) {
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;

    value = +matches[1];
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }
  }

  return value;
};

export default myAtoi;
