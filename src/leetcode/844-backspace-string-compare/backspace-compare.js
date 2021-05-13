/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const toText = (string) => {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '#') {
        stack.pop();
      } else {
        stack.push(string[i]);
      }
    }

    return stack;
  };

  const sText = toText(s);
  const tText = toText(t);

  if (sText.length !== tText.length) return false;

  for (let i = 0; i < sText.length; i++) {
    if (sText[i] !== tText[i]) return false;
  }

  return true;
};

export default backspaceCompare;
