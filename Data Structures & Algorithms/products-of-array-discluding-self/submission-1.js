class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arrFirst = [1];

        for (let i = 1; i < nums.length; i++) {
          arrFirst.push(arrFirst[i - 1] * nums[i - 1]);
        }

        const arrLast = [1];

        for (let i = nums.length - 1; i >= 1; i--) {
          arrLast.unshift(arrLast[0] * nums[i]);
        }

        const res = [];

        for (let i = 0; i < nums.length; i++) {
          res.push(arrFirst[i] * arrLast[i]);
        }

        return res;
    }
}
