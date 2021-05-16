/**
 * 904. Fruit Into Baskets
 * https://leetcode.com/problems/fruit-into-baskets/
 * Brute force
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  const length = tree.length;

  const countSuccessives = (fromIndex) => {
    const firstType = tree[fromIndex];

    let nextIndex;
    let nextType;
    let count = 0;

    for (let i = fromIndex; i < length; i++) {
      if (tree[i] === firstType) {
        count++;
        continue;
      }

      if (nextType === undefined) {
        nextIndex = i;
        nextType = tree[i];
      }

      if (tree[i] === nextType) {
        count++;
        continue;
      }

      break;
    }

    return { count, nextIndex };
  };

  let max = 0;
  let i = 0;
  while (i < length) {
    const { count, nextIndex } = countSuccessives(i);
    max = Math.max(max, count);
    i = nextIndex;
  }

  return max;
};

export default totalFruit;
