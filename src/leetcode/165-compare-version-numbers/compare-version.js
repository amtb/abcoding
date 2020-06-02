/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  /**
   * split the version to an array of numbers
   * @param {string} version
   * @return {number[]}
   */
  const split = (version) => {
    return version.split('.').map((e) => +e);
  };

  const v1 = split(version1);
  const v2 = split(version2);

  const maxLength = Math.max(v1.length, v2.length);

  for (let i = 0; i < maxLength; i++) {
    const a = v1[i] || 0;
    const b = v2[i] || 0;

    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  }

  return 0;
};

export default compareVersion;
