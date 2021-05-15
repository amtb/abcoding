/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const length = nums.length;

  const getConsecutives = (fromIndex) => {
    let count = 0;
    for (
      let i = fromIndex;
      i + 1 < length && nums[i] + 1 === nums[i + 1];
      i++
    ) {
      count += 1;
    }
    return count;
  };

  const result = [];

  let i = 0;
  while (i < length) {
    const consecutives = getConsecutives(i);

    if (consecutives === 0) {
      result.push(`${nums[i]}`);
    } else {
      result.push(`${nums[i]}->${nums[i + consecutives]}`);
      i += consecutives;
    }

    i++;
  }

  return result;
};

export default summaryRanges;
