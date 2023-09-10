/**
 * @param {number} n
 * @return {number}
 */

const countOrders = (n) => {
  let combos = 1;
  for (let i = 2; i <= n; i++) {
    combos = (combos * i * (2*i - 1)) % (10**9 + 7);
  }
  return combos;
}

module.exports = countOrders;