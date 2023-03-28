/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
      const n = nums.length;
  let sum = 0;
  let expectedSum = (n * (n + 1)) / 2;
  
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  
  return expectedSum - sum;
};

