/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
const map = new Map();
for (let num of nums){
    if(map[num]){
       return true;
    }
    map[num] = true;
}
return false;
};

//if nums array has at least one duplicate return true
//if else return false

// hash map
// for of loop 
// if Map has 