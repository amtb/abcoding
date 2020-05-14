/**
 * brute force
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let max = -Infinity;
//   let bag = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);
//     if (bag.has(char)) {
//       // found a repetition, check if we have a longer string
//       max = Math.max(bag.size, max);

//       // back track
//       bag = new Map();
//       let j = i - 1;
//       let item = s.charAt(j);
//       while (item !== char) {
//         bag.set(item, true);
//         item = s.charAt(--j);
//       }
//     }

//     bag.set(char, true);
//   }

//   return Math.max(max, bag.size);
// };

var lengthOfLongestSubstring = function (s) {
  let max = -Infinity;
  const bag = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (bag.has(char)) {
      // found a repetition, check if we have a longer string
      max = Math.max(bag.size, max);

      // back track
      bag.clear();
      let j = i - 1;
      let item = s.charAt(j);
      while (item !== char) {
        bag.set(item, true);
        item = s.charAt(--j);
      }
    }

    bag.set(char, true);
  }

  return Math.max(max, bag.size);
};

export default lengthOfLongestSubstring;
