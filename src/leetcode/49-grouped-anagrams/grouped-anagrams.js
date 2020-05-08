/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   const groups = [];

//   const areAnagrams = (sChars, t) => {
//     const tChars = t.split('').sort().join();
//     return sChars === tChars;
//   };

//   while (strs.length > 0) {
//     const string = strs.shift();
//     const sChars = string.split('').sort().join();
//     const anagrams = [string];

//     let j = 0;
//     while (j < strs.length) {
//       if (areAnagrams(sChars, strs[j])) {
//         anagrams.push(strs[j]);
//         strs.splice(j, 1);
//       } else {
//         j++;
//       }
//     }

//     groups.push(anagrams);
//   }

//   return groups;
// };

var groupAnagrams = function (strs) {

  const getKey = (string) => {
    return string.split('').sort().join();
  };

  const groups = strs.reduce((acc, string) => {
    const key = getKey(string);
    if (acc[key]) {
      acc[key].push(string);
    } else {
      acc[key] = [string];
    }

    return acc;
  }, {});

  return Object.values(groups);
};

export default groupAnagrams;
