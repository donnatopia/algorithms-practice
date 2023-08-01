/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

module.exports = (n, k) => {
  const result = [];
  const currentCombo = [];

  const generateCombos = (start) => {
    if (currentCombo.length === k) {
      result.push([...currentCombo]);
      return;
    }

    for (let i = start; i <= n; i++) {
      currentCombo.push(i);
      generateCombos(i + 1);
      currentCombo.pop();
    }
  };

  generateCombos(1);
  return result;
};