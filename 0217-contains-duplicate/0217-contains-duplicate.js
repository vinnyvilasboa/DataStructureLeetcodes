/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
const toMap = {};
for (let num of nums){
    if(toMap[num]){
       return true;
    }
    toMap[num] = true;
}
return false;
};