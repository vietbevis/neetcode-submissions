class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1

        while (left <= right) {
            const midIndex = Math.floor((left + right) / 2);
            const mid = nums[midIndex];

            if (mid === target) return midIndex;

            if (mid < target) left = midIndex + 1;
            else right = midIndex - 1;
        }

        return -1;
    }
    // 0, 1, 2, 3, 5, 6, 7 ============ 4
    // [3, 5] 4
}
