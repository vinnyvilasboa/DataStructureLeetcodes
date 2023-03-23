/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Return new array with elements that are repeated betweeen nums1 + nums2 arr
//use binary search

// Set start 2 points for array 
var intersection = function(nums1, nums2) {
    let sortedNums1 = nums1.sort((a,b) => a - b);
    let sortedNums2 = nums2.sort((a,b) => a - b);
    let result=[];
    
    let i = 0;
    let j = 0;
    
    while(i < sortedNums1.length && j < sortedNums2.length){
        if(sortedNums1[i] === sortedNums2[j]){
            if(!result.includes(sortedNums1[i]))
                result.push(sortedNums1[i])
            i++;
            j++;
        }
        else if(sortedNums1[i] < sortedNums2[j]) i++
        else j++
    }
    return result;
};
