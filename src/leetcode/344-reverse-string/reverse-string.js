/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  let swap;

  while (i < j) {
    swap = s[i];
    s[i] = s[j];
    s[j] = swap;

    i++;
    j--;
  }
};
export default reverseString;
