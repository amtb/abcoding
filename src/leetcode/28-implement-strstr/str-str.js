/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  const foundAt = (index) => {
    let i = index;
    let j = index + needle.length - 1;

    while (i <= j) {
      if (
        haystack[i] !== needle[i - index] ||
        haystack[j] !== needle[j - index]
      ) {
        return false;
      }

      i++;
      j--;
    }

    return true;
  };

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (foundAt(i)) {
      return i;
    }
  }

  return -1;
};

export default strStr;
