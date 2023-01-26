/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]
var merge = function(nums1, m, nums2, n) {
    /*Starts at the end of the array bsased on element count */
    let first = m - 1;
    let second = n - 1;
    /*sets index to be looped through together & backwards */
    for (let i = m + n - 1; i >= 0; i--){
        /*based case*/
     if(second < 0){
         break;
     } 
      if(nums1[first] > nums2[second]){
          nums1[i] = nums1[first];
          first--;
      } else{
          nums1[i]=nums2[second];
          second--;
      }
    }
};