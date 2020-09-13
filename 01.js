/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        const sub = target - nums[i]
        if (!map.has(sub)) {
            map.set(nums[i], i)//把当前的索引作为val存到map中，方便返回
        } else {
            return [map.get(sub),i]
        }
    }
};