/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */

module.exports = (nums, cost) => {
  let nums_costs = nums.map((num, i) => [num, cost[i]]);
  nums_costs.sort((a, b) => a[0] - b[0]);

  let left_index = 0;
  let right_index = nums.length - 1;
  let left_cost = nums_costs[left_index][1];
  let right_cost = nums_costs[right_index][1];
  let total_cost = 0;

  while (right_index > left_index) {
    if (left_cost < right_cost) {
      let left_value = nums_costs[left_index][0];
      let new_left_value = nums_costs[left_index + 1][0];
      total_cost += (new_left_value - left_value) * left_cost;
      left_index++;
      left_cost += nums_costs[left_index][1];
    } else {
      let right_value = nums_costs[right_index][0];
      let new_right_value = nums_costs[right_index - 1][0];
      total_cost += (right_value - new_right_value) * right_cost;
      right_index--;
      right_cost += nums_costs[right_index][1];
    }
  }

  return total_cost;
}