/**
 * 1817. Finding the Users Active Minutes
 * https://leetcode.com/problems/finding-the-users-active-minutes/
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const result = Array.from({ length: k }).map(() => 0);

  const userTimes = {};
  for (const [id, time] of logs) {
    if (!(id in userTimes)) {
      userTimes[id] = new Set();
    }

    userTimes[id].add(time);
  }

  for (const id in userTimes) {
    const uam = userTimes[id].size;
    result[uam - 1] += 1; // 1-indexed array
  }

  return result;
};

export default findingUsersActiveMinutes;
