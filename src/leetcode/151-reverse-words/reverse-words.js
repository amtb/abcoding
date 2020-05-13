/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.match(/([^\s]+)/g);
  if (words) {
    let reverse = '';
    for (let i = words.length - 1; i >= 0; i--) {
      reverse += words[i];

      if (i !== 0) {
        reverse += ' ';
      }
    }
    return reverse;
  }
  return '';
};

export default reverseWords;
