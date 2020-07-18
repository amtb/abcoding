/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [...digits];
  const plus = () => {
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] < 9) {
        result[i] += 1;
        return;
      }
      result[i] = 0;
    }

    return 0;
  };

  const lastIndex = plus();
  if (lastIndex === 0) {
    result.unshift(1);
  }

  return result;
};

export default plusOne;
