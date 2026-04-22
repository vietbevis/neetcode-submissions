class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let nums = [];

        for (const item of matrix) {
            if (target >= item[0] && target <= item[item.length - 1]) nums = item;
        }
        
        let left = 0;
        let right = nums.length - 1

        while (left <= right) {
            const midIndex = Math.floor((left + right) / 2);
            const mid = nums[midIndex];

            if (mid === target) return true;

            if (mid < target) left = midIndex + 1;
            else right = midIndex - 1;
        }

        return false;
    }
}
