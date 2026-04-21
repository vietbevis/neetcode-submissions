class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            const minus = target - nums[i]
            const lastIndex = map.get(minus)
            if (lastIndex && lastIndex !== i) {
                return [i, lastIndex]
            }
        }
    }
}
