/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
 let n = nums.length;
    let sum = 0;
    let expectedSum = (n * (n + 1 )) / 2;
    for (let i = 0; i < n; i++){
        //adds the current number to the sum variable with each iteration
        sum = sum + nums[i];
    }
    return expectedSum - sum
        
};

