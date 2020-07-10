/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const singles = {};
  nums.forEach((value) => {
    singles[value] = !(value in singles);
  });

  for (const key in singles) {
    if (singles[key]) {
      return +key;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNum = (nums) => {
  return nums.reduce((a, b) => a ^ b);
};

export default singleNumber;
