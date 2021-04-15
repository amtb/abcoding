/**
 *
 * @param {string} keyboard
 * @param {string} text
 */
var timeToType = function (keyboard, text) {
  const positions = {};
  for (let i = 0; i < keyboard.length; i++) {
    positions[keyboard[i]] = i;
  }

  let ttt = positions[text[0]];
  for (let i = 0; i < text.length - 1; i++) {
    const distance = positions[text[i]] - positions[text[i + 1]];
    ttt += Math.abs(distance);
  }

  return ttt;
};

export default timeToType;
