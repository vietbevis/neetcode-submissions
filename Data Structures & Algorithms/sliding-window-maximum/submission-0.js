class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const max = [Math.max(...nums.slice(0, k))]
        for (let i = 1; i <= nums.length - k; i++) {
            max.push(Math.max(...nums.slice(i, i + k)))
        }
        return max
    }
}
