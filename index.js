/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 *  If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) {return 0}
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target){return i}
    }    
    for (let i = 0; i < nums.length - 1; i++){
        if (target > nums[i] && target < nums[i+1]){return i+1}
    }
    return nums.length

};

console.log(searchInsert([1,3,5,6], 6))

/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target){
            result[0] = i
            break
            }
    }
    for (let i = nums.length - 1; i >= 0; i--){
        if (nums[i] === target){
            result[1] = i
            break
            }
    }
    return result
};

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let el = nums[i];
        for (let j = i+1; j < nums.length; j++){
            if (el + nums[j] === target){return [i, j]}
        }
    }
};