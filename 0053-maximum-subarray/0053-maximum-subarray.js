/**
 * @param {number[]} nums
 * @return {number}
 */

let maxSubArray = (nums) => {
    
//->2 starting points at 0 index
    
let maxCurrent = nums[0];
let maxGlobal = nums[0];
    
//->loop starting at index 1 since it has index as starting point 
    
for ( let i = 1; i < nums.length; i++){
    
//->maxCurrent var will be whichever index is higher in value, either the current index or the next added to it.
    
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
    
//->if the current index is higher than the global index reset value of global to current index. 
    
    if (maxCurrent > maxGlobal){
        maxGlobal = maxCurrent;
    }
    }
    return maxGlobal   
};