class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        const set = new Set(nums)
        let max = 1;
        for (const num of set.values()) {
            let count = 1;
            while (set.has(num + count)) {
                count++
                max = Math.max(max, count)
            };
        }

        return max
    }
}
