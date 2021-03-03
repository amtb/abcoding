/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const cas = (value) => {
    let result = '';

    let i = 0;
    while (i < value.length) {
      let counter = 1;

      let j = i + 1;
      while (j < value.length && value[i] === value[j]) {
        counter++;
        j++;
      }

      result += `${counter}${value[i]}`;
      i = j;
    }

    return result;
  };

  const values = ['1'];

  for (let i = 1; i < n; i++) {
    values.push(cas(values[i - 1]));
  }

  return values[n - 1];
};

export default countAndSay;
