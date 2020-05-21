/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencies = nums.reduce((freq, num) => {
    if (freq[num]) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
    return freq;
  }, {});

  // O(n log(n))
  // TODO could be "improved" using a heap of k elements max
  const sorted = Object.keys(frequencies).sort(
    (a, b) => frequencies[b] - frequencies[a]
  );
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(+sorted[i]);
  }

  return res;
};

export default topKFrequent;
