/**
 * https://en.wikipedia.org/wiki/3SUM#Quadratic_algorithm
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const size = nums.length;
  if (size < 3) {
    return [];
  }

  function ukey(element, left, right) {
    return `${element}-${left}-${right}`;
  }

  const found = {};

  const wasFound = (a, b, c) => {
    return (
      found[ukey(a, b, c)] ||
      found[ukey(a, c, b)] ||
      found[ukey(b, a, c)] ||
      found[ukey(b, c, a)] ||
      found[ukey(c, a, b)] ||
      found[ukey(c, b, a)]
    );
  };

  const searched = {};
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= size - 2; i++) {
    const element = nums[i];
    let start = i + 1;
    let end = size - 1;

    if (!searched[element]) {
      searched[element] = true;
      while (start < end) {
        const left = nums[start];
        const right = nums[end];
        const sum = element + left + right;
        if (sum === 0) {
          const key = ukey(element, left, right);
          if (!wasFound(element, left, right)) {
            found[key] = true;
            res.push([element, left, right]);
          }
          start += 1;
          end -= 1;
        } else if (sum < 0) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
  }

  return res;
};

export default threeSum;
