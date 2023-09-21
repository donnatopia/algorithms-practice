/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1, nums2) => {
  let combined = nums1.concat(nums2).sort((a, b) => a - b);
  let median = (combined.length - 1) / 2

  if (median % 1 === 0) {
    return combined[median];
  } else {
    return (combined[Math.floor(median)] + combined[Math.ceil(median)]) / 2
  }
}

module.exports = findMedianSortedArrays;