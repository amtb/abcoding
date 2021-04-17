/**
 * 1282. Group the People Given the Group Size They Belong To
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const n = groupSizes.length;
  // to return
  const groups = [];

  const peopleAndGroups = groupSizes.map((size, uid) => ({ size, uid }));
  // re-arrange the people per group size
  peopleAndGroups.sort((l, r) => l.size - r.size);

  let i = 0;
  while (i < n) {
    const { size } = peopleAndGroups[i];

    const group = [];
    for (let j = i; j < i + size; j++) {
      group.push(peopleAndGroups[j].uid);
    }

    groups.push(group);
    i += size;
  }

  return groups;
};

export default groupThePeople;
