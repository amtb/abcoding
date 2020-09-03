/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce((acc, num) => {
    const last = acc[acc.length - 1] || 0;
    acc[acc.length] = last + num;
    return acc;
  }, []);
};

export default runningSum;
