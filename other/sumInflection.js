/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sums = [];
  
  for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
          sums.push(0)
          continue;
      }
      
      if (i === 1) {
          sums.push(nums[0])
          continue;
      }
      
      sums.push(sums[sums.length - 1] + nums[i - 1])
  }

  let totalSum = sums[sums.length - 1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
      const n = nums[i]
      const leftSum = sums[i]
      const rightSum = totalSum - leftSum - n;
      if (leftSum === rightSum) {
          return i;
      }
  }
  
  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))