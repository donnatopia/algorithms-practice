/**
 * @param {string} s
 * @return {number}
 */

module.exports = (s) => {
  let max = 0;
  const mem = new Set();
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!mem.has(s[right])) {
      mem.add(s[right]);
      right++;
      max = Math.max(max, right - left);
    } else {
      mem.delete(s[left]);
      left++;
    }
  }

  return max;
}